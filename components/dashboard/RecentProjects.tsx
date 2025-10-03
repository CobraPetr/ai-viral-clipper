'use client';

import { motion } from 'framer-motion';
import { 
  Play, 
  Download, 
  MoreVertical, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Eye,
  Share2,
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatDate, getStatusColor } from '@/lib/utils';

// Mock data - in real app, this would come from API
const recentProjects = [
  {
    id: '1',
    title: 'Tech Talk Podcast Highlights',
    description: 'AI and Future of Work',
    status: 'completed',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    duration: '2:34',
    views: 12500,
    engagement: 8.5,
    created_at: '2024-01-15T10:30:00Z',
    variants: 5,
  },
  {
    id: '2',
    title: 'Business Strategy Session',
    description: 'Startup Growth Hacks',
    status: 'processing',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    duration: '1:45',
    views: 0,
    engagement: 0,
    created_at: '2024-01-14T15:20:00Z',
    variants: 3,
  },
  {
    id: '3',
    title: 'Fitness Motivation Clip',
    description: 'Morning Workout Routine',
    status: 'completed',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    duration: '0:58',
    views: 8900,
    engagement: 12.3,
    created_at: '2024-01-13T09:15:00Z',
    variants: 8,
  },
  {
    id: '4',
    title: 'Cooking Tutorial Series',
    description: 'Quick 5-Minute Meals',
    status: 'failed',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    duration: '0:00',
    views: 0,
    engagement: 0,
    created_at: '2024-01-12T14:45:00Z',
    variants: 0,
    error: 'Audio quality too low',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case 'processing':
      return <Clock className="h-4 w-4 text-blue-600" />;
    case 'failed':
      return <XCircle className="h-4 w-4 text-red-600" />;
    default:
      return <AlertCircle className="h-4 w-4 text-gray-600" />;
  }
};

export function RecentProjects() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
          <p className="text-sm text-gray-600">Your latest viral content creations</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {recentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            {/* Thumbnail */}
            <div className="relative flex-shrink-0">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-16 w-16 rounded-lg object-cover"
              />
              {project.status === 'completed' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {project.title}
                </h3>
                {getStatusIcon(project.status)}
              </div>
              <p className="text-xs text-gray-500 truncate">{project.description}</p>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-xs text-gray-500">{project.duration}</span>
                <span className="text-xs text-gray-500">{project.variants} variants</span>
                <span className="text-xs text-gray-500">{formatDate(project.created_at)}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="text-center">
                <div className="font-medium text-gray-900">{project.views.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Views</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-gray-900">{project.engagement}%</div>
                <div className="text-xs text-gray-500">Engagement</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {project.status === 'completed' && (
                <>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </>
              )}
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {recentProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto h-12 w-12 text-gray-400">
            <Play className="h-full w-full" />
          </div>
          <h3 className="mt-4 text-sm font-medium text-gray-900">No projects yet</h3>
          <p className="mt-2 text-sm text-gray-500">
            Get started by uploading your first video or audio file.
          </p>
          <div className="mt-6">
            <Button size="sm">
              Create Your First Project
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
