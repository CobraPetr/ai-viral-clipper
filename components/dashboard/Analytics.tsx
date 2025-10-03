'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Eye, Heart, Share2, MessageCircle } from 'lucide-react';

// Mock data - in real app, this would come from API
const analyticsData = {
  totalViews: 125000,
  totalLikes: 8500,
  totalShares: 1200,
  totalComments: 450,
  viewsChange: 12.5,
  likesChange: 8.2,
  sharesChange: -2.1,
  commentsChange: 15.3,
  topPerformingVideo: {
    title: 'Tech Talk Podcast Highlights',
    views: 25000,
    engagement: 12.5,
  },
  recentTrends: [
    { date: '2024-01-10', views: 1200, likes: 85, shares: 12 },
    { date: '2024-01-11', views: 1800, likes: 120, shares: 18 },
    { date: '2024-01-12', views: 2200, likes: 150, shares: 25 },
    { date: '2024-01-13', views: 1900, likes: 130, shares: 20 },
    { date: '2024-01-14', views: 2800, likes: 200, shares: 35 },
    { date: '2024-01-15', views: 3200, likes: 250, shares: 40 },
  ],
};

const metrics = [
  {
    name: 'Total Views',
    value: analyticsData.totalViews.toLocaleString(),
    change: analyticsData.viewsChange,
    icon: Eye,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Total Likes',
    value: analyticsData.totalLikes.toLocaleString(),
    change: analyticsData.likesChange,
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    name: 'Total Shares',
    value: analyticsData.totalShares.toLocaleString(),
    change: analyticsData.sharesChange,
    icon: Share2,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Total Comments',
    value: analyticsData.totalComments.toLocaleString(),
    change: analyticsData.commentsChange,
    icon: MessageCircle,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
];

export function Analytics() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Analytics Overview</h2>
        <p className="text-sm text-gray-600">Your content performance across all platforms</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg border border-gray-200 p-4"
          >
            <div className="flex items-center">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`h-5 w-5 ${metric.color}`} />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {metric.change > 0 ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
              <span className={`ml-1 text-sm font-medium ${
                metric.change > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </span>
              <span className="ml-1 text-sm text-gray-500">vs last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Top Performing Video */}
      <div className="rounded-lg border border-gray-200 p-4 mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Top Performing Video</h3>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">
              {analyticsData.topPerformingVideo.title}
            </h4>
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
              <span>{analyticsData.topPerformingVideo.views.toLocaleString()} views</span>
              <span>{analyticsData.topPerformingVideo.engagement}% engagement</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">
              {analyticsData.topPerformingVideo.engagement}%
            </div>
            <div className="text-xs text-gray-500">Engagement Rate</div>
          </div>
        </div>
      </div>

      {/* Recent Trends Chart */}
      <div className="rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Recent Trends (Last 7 Days)</h3>
        <div className="space-y-3">
          {analyticsData.recentTrends.map((day, index) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="text-sm text-gray-600">
                {new Date(day.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-900">{day.views} views</span>
                <span className="text-gray-600">{day.likes} likes</span>
                <span className="text-gray-600">{day.shares} shares</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
