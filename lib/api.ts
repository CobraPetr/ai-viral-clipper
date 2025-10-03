import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.aiviralclipper.com';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('auth_token');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

// Types
export interface Project {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  source_url?: string;
  source_file_path?: string;
  source_duration?: number;
  source_file_size?: number;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  error_message?: string;
  created_at: string;
  updated_at: string;
  processed_at?: string;
}

export interface Variant {
  id: string;
  project_id: string;
  video_type: string;
  title: string;
  description?: string;
  start_time?: number;
  end_time?: number;
  hook?: string;
  call_to_action?: string;
  caption_style: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  render_url?: string;
  thumbnail_url?: string;
  preview_url?: string;
  duration?: number;
  file_size?: number;
  error_message?: string;
  created_at: string;
  updated_at: string;
  rendered_at?: string;
}

export interface Transcript {
  language: string;
  duration: number;
  segments: Array<{
    start: number;
    end: number;
    text: string;
    confidence: number;
    speaker?: string;
  }>;
  speakers: Array<{
    speaker_id: string;
    name?: string;
    segments: Array<any>;
  }>;
  confidence: number;
  processing_time: number;
  model_used: string;
}

export interface ViralCut {
  start_time: number;
  end_time: number;
  duration: number;
  title: string;
  hook: string;
  description: string;
  call_to_action?: string;
  viral_score: number;
  engagement_prediction: {
    views: number;
    likes: number;
    shares: number;
    comments: number;
  };
  suggested_video_types: string[];
  ai_script?: string;
  thumbnail_prompt?: string;
  broll_prompt?: string;
  tags: string[];
  target_audience?: string;
  content_category?: string;
}

export interface ViralCutlist {
  project_id: string;
  total_cuts: number;
  cuts: ViralCut[];
  processing_time: number;
  model_used: string;
  confidence: number;
  top_cuts: number[];
  recommended_video_types: string[];
}

export interface ProjectStatus {
  project_id: string;
  status: string;
  progress: number;
  current_stage?: string;
  estimated_completion?: string;
  transcript?: Transcript;
  cutlist?: ViralCutlist;
  variants: Variant[];
  error_message?: string;
  retry_count: number;
}

// API functions
export const apiClient = {
  // Health check
  health: async () => {
    const response = await api.get('/health');
    return response.data;
  },

  // Projects
  createProject: async (project: {
    title: string;
    description?: string;
    source_url?: string;
  }) => {
    const response = await api.post('/projects', project);
    return response.data;
  },

  getProject: async (projectId: string) => {
    const response = await api.get(`/projects/${projectId}`);
    return response.data;
  },

  getProjects: async (params?: {
    user_id?: string;
    limit?: number;
    offset?: number;
  }) => {
    const response = await api.get('/projects', { params });
    return response.data;
  },

  // Ingest
  ingestFromUrl: async (projectId: string, sourceUrl: string) => {
    const response = await api.post('/ingest', {
      project_id: projectId,
      source_url: sourceUrl,
      user_id: 'demo_user', // TODO: Get from auth
    });
    return response.data;
  },

  uploadFile: async (projectId: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await api.post(`/ingest/upload?project_id=${projectId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Status
  getProjectStatus: async (projectId: string) => {
    const response = await api.get(`/status/${projectId}`);
    return response.data;
  },

  // Variants
  createVariant: async (variant: {
    project_id: string;
    video_type: string;
    title: string;
    description?: string;
    start_time?: number;
    end_time?: number;
    hook?: string;
    call_to_action?: string;
    caption_style?: string;
  }) => {
    const response = await api.post('/variants', variant);
    return response.data;
  },

  getVariant: async (variantId: string) => {
    const response = await api.get(`/variants/${variantId}`);
    return response.data;
  },

  getVariants: async (params?: {
    project_id?: string;
    limit?: number;
    offset?: number;
  }) => {
    const response = await api.get('/variants', { params });
    return response.data;
  },

  // Render
  renderVariant: async (variantId: string, renderConfig?: any) => {
    const response = await api.post(`/render/${variantId}`, {
      render_config: renderConfig,
      user_id: 'demo_user', // TODO: Get from auth
    });
    return response.data;
  },

  // Providers
  getTTSVoices: async (provider?: string) => {
    const response = await api.get('/providers/tts/voices', {
      params: { provider },
    });
    return response.data;
  },

  getVideoModels: async (provider?: string) => {
    const response = await api.get('/providers/video/models', {
      params: { provider },
    });
    return response.data;
  },

  getImageModels: async (provider?: string) => {
    const response = await api.get('/providers/image/models', {
      params: { provider },
    });
    return response.data;
  },

  // Downloads
  downloadFile: async (fileType: string, fileId: string) => {
    const response = await api.get(`/download/${fileType}/${fileId}`, {
      responseType: 'blob',
    });
    return response.data;
  },
};

// Utility functions
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'pending':
      return 'text-yellow-600 bg-yellow-100';
    case 'processing':
      return 'text-blue-600 bg-blue-100';
    case 'completed':
      return 'text-green-600 bg-green-100';
    case 'failed':
      return 'text-red-600 bg-red-100';
    case 'cancelled':
      return 'text-gray-600 bg-gray-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const getVideoTypeLabel = (videoType: string): string => {
  const labels: Record<string, string> = {
    podcast_highlight: 'Podcast Highlight',
    storytime_confession: 'Storytime Confession',
    expert_hot_take: 'Expert Hot Take',
    prank_reaction: 'Prank Reaction',
    audiogram: 'Audiogram',
    gameplay_overlay: 'Gameplay Overlay',
    asmr_satisfying: 'ASMR Satisfying',
    compilation_montage: 'Compilation Montage',
    quote_motion: 'Quote Motion',
    slides_carousel: 'Slides Carousel',
    script_to_video: 'Script to Video',
    avatar_presenter: 'Avatar Presenter',
    lip_sync_music: 'Lip Sync Music',
    whiteboard_explainer: 'Whiteboard Explainer',
    data_infographic: 'Data Infographic',
    cinematic_broll: 'Cinematic B-roll',
    ugc_review: 'UGC Review',
    before_after: 'Before/After',
    how_to_tutorial: 'How-To Tutorial',
    lyric_video: 'Lyric Video',
    subtitle_translation: 'Subtitle Translation',
    duet_stitch: 'Duet/Stitch',
    shorts_thumbnail: 'Shorts Thumbnail',
  };
  
  return labels[videoType] || videoType;
};

export const getCaptionStyleLabel = (style: string): string => {
  const labels: Record<string, string> = {
    default: 'Default',
    bold: 'Bold',
    outline: 'Outline',
    shadow: 'Shadow',
    neon: 'Neon',
    typewriter: 'Typewriter',
    bounce: 'Bounce',
    slide_in: 'Slide In',
    fade_in: 'Fade In',
  };
  
  return labels[style] || style;
};

export default api;
