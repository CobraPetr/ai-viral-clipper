import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Client-side Supabase client
export const createClient = () => createClientComponentClient();

// Server-side Supabase client
export const createServerClient = () => createServerComponentClient({ cookies });

// Database types (generated from Supabase)
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          subscription_tier: string;
          credits_remaining: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          subscription_tier?: string;
          credits_remaining?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          subscription_tier?: string;
          credits_remaining?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          source_url: string | null;
          source_file_path: string | null;
          source_duration_seconds: number | null;
          source_file_size_bytes: number | null;
          status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
          error_message: string | null;
          created_at: string;
          updated_at: string;
          processed_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          description?: string | null;
          source_url?: string | null;
          source_file_path?: string | null;
          source_duration_seconds?: number | null;
          source_file_size_bytes?: number | null;
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
          processed_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          description?: string | null;
          source_url?: string | null;
          source_file_path?: string | null;
          source_duration_seconds?: number | null;
          source_file_size_bytes?: number | null;
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
          processed_at?: string | null;
        };
      };
      variants: {
        Row: {
          id: string;
          project_id: string;
          video_type: string;
          title: string;
          description: string | null;
          start_time_seconds: number | null;
          end_time_seconds: number | null;
          hook_text: string | null;
          call_to_action: string | null;
          caption_style: string;
          background_music_path: string | null;
          visual_effects: any | null;
          ai_script: string | null;
          ai_thumbnail_prompt: string | null;
          ai_broll_prompt: string | null;
          status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
          render_url: string | null;
          thumbnail_url: string | null;
          preview_url: string | null;
          tts_provider: string | null;
          video_provider: string | null;
          image_provider: string | null;
          duration_seconds: number | null;
          file_size_bytes: number | null;
          processing_time_seconds: number | null;
          error_message: string | null;
          created_at: string;
          updated_at: string;
          rendered_at: string | null;
        };
        Insert: {
          id?: string;
          project_id: string;
          video_type: string;
          title: string;
          description?: string | null;
          start_time_seconds?: number | null;
          end_time_seconds?: number | null;
          hook_text?: string | null;
          call_to_action?: string | null;
          caption_style?: string;
          background_music_path?: string | null;
          visual_effects?: any | null;
          ai_script?: string | null;
          ai_thumbnail_prompt?: string | null;
          ai_broll_prompt?: string | null;
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
          render_url?: string | null;
          thumbnail_url?: string | null;
          preview_url?: string | null;
          tts_provider?: string | null;
          video_provider?: string | null;
          image_provider?: string | null;
          duration_seconds?: number | null;
          file_size_bytes?: number | null;
          processing_time_seconds?: number | null;
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
          rendered_at?: string | null;
        };
        Update: {
          id?: string;
          project_id?: string;
          video_type?: string;
          title?: string;
          description?: string | null;
          start_time_seconds?: number | null;
          end_time_seconds?: number | null;
          hook_text?: string | null;
          call_to_action?: string | null;
          caption_style?: string;
          background_music_path?: string | null;
          visual_effects?: any | null;
          ai_script?: string | null;
          ai_thumbnail_prompt?: string | null;
          ai_broll_prompt?: string | null;
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
          render_url?: string | null;
          thumbnail_url?: string | null;
          preview_url?: string | null;
          tts_provider?: string | null;
          video_provider?: string | null;
          image_provider?: string | null;
          duration_seconds?: number | null;
          file_size_bytes?: number | null;
          processing_time_seconds?: number | null;
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
          rendered_at?: string | null;
        };
      };
      transcripts: {
        Row: {
          id: string;
          project_id: string;
          raw_transcript: any;
          cleaned_transcript: string | null;
          speaker_diarization: any | null;
          confidence_scores: any | null;
          language_code: string;
          processing_time_seconds: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          raw_transcript: any;
          cleaned_transcript?: string | null;
          speaker_diarization?: any | null;
          confidence_scores?: any | null;
          language_code?: string;
          processing_time_seconds?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          raw_transcript?: any;
          cleaned_transcript?: string | null;
          speaker_diarization?: any | null;
          confidence_scores?: any | null;
          language_code?: string;
          processing_time_seconds?: number | null;
          created_at?: string;
        };
      };
      processing_jobs: {
        Row: {
          id: string;
          project_id: string;
          variant_id: string | null;
          job_type: string;
          status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
          priority: number;
          input_data: any | null;
          output_data: any | null;
          error_data: any | null;
          started_at: string | null;
          completed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          variant_id?: string | null;
          job_type: string;
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
          priority?: number;
          input_data?: any | null;
          output_data?: any | null;
          error_data?: any | null;
          started_at?: string | null;
          completed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          variant_id?: string | null;
          job_type?: string;
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
          priority?: number;
          input_data?: any | null;
          output_data?: any | null;
          error_data?: any | null;
          started_at?: string | null;
          completed_at?: string | null;
          created_at?: string;
        };
      };
      analytics: {
        Row: {
          id: string;
          project_id: string | null;
          variant_id: string | null;
          event_type: string;
          event_data: any | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id?: string | null;
          variant_id?: string | null;
          event_type: string;
          event_data?: any | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string | null;
          variant_id?: string | null;
          event_type?: string;
          event_data?: any | null;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      video_type: 'podcast_highlight' | 'storytime_confession' | 'expert_hot_take' | 'prank_reaction' | 'audiogram' | 'gameplay_overlay' | 'asmr_satisfying' | 'compilation_montage' | 'quote_motion' | 'slides_carousel' | 'script_to_video' | 'avatar_presenter' | 'lip_sync_music' | 'whiteboard_explainer' | 'data_infographic' | 'cinematic_broll' | 'ugc_review' | 'before_after' | 'how_to_tutorial' | 'lyric_video' | 'subtitle_translation' | 'duet_stitch' | 'shorts_thumbnail';
      caption_style: 'default' | 'bold' | 'outline' | 'shadow' | 'neon' | 'typewriter' | 'bounce' | 'slide_in' | 'fade_in';
      processing_status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
      provider_type: 'openai' | 'claude' | 'elevenlabs' | 'edge_tts' | 'runway' | 'pika' | 'luma' | 'stable_diffusion' | 'flux';
    };
  };
}

// Helper functions for common operations
export async function getProfile(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function updateProfile(userId: string, updates: Partial<Database['public']['Tables']['profiles']['Update']>) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function getProjects(userId: string, limit = 20, offset = 0) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);
  
  if (error) throw error;
  return data;
}

export async function getProject(projectId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', projectId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getVariants(projectId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('variants')
    .select('*')
    .eq('project_id', projectId)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function getVariant(variantId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('variants')
    .select('*')
    .eq('id', variantId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getTranscript(projectId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('transcripts')
    .select('*')
    .eq('project_id', projectId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function trackAnalytics(event: {
  project_id?: string;
  variant_id?: string;
  event_type: string;
  event_data?: any;
}) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('analytics')
    .insert(event)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}
