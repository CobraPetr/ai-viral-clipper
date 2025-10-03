'use client';

import { motion } from 'framer-motion';
import { Upload, Link, Zap, Video, Mic, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const quickActions = [
  {
    name: 'Upload File',
    description: 'Upload your podcast, video, or audio file',
    icon: Upload,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    href: '/upload',
  },
  {
    name: 'Import from URL',
    description: 'Import content from YouTube, podcast, or other URLs',
    icon: Link,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    href: '/import',
  },
  {
    name: 'AI Templates',
    description: 'Choose from 25+ professional video templates',
    icon: Video,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    href: '/templates',
  },
  {
    name: 'Voice Cloning',
    description: 'Create custom AI voices for your content',
    icon: Mic,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    href: '/voice-cloning',
  },
  {
    name: 'Script Generator',
    description: 'Generate viral scripts with AI',
    icon: FileText,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    href: '/script-generator',
  },
  {
    name: 'Bulk Processing',
    description: 'Process multiple files at once',
    icon: Zap,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    href: '/bulk-processing',
  },
];

export function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
        <p className="text-sm text-gray-600">Start creating viral content in seconds</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action, index) => (
          <motion.div
            key={action.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-lg border border-gray-200 p-4 hover:border-primary-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start space-x-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.bgColor}`}>
                <action.icon className={`h-5 w-5 ${action.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                  {action.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{action.description}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="mt-3 w-full text-xs"
              onClick={() => {
                // Handle navigation
                console.log(`Navigate to ${action.href}`);
              }}
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            New to AI Viral Clipper? Start with our guided tutorial
          </p>
          <Button size="sm" className="group">
            Take the Tour
            <Zap className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </div>
  );
}
