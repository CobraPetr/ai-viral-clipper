'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Upload, Link as LinkIcon, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 px-6 py-3 text-sm font-medium text-purple-200">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered Viral Content
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Turn Long Videos Into{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Viral Clips
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto"
          >
            Upload your content and let AI find the most engaging moments
          </motion.p>

          {/* Upload Interface */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Start Your Viral Transformation</h3>
              <p className="text-gray-400 mb-8">Upload a video file or paste a URL from YouTube, TikTok, or any podcast</p>
              
              {/* Upload Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Button 
                  variant="outline" 
                  className="h-16 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600/50 hover:border-purple-500 transition-all duration-300"
                >
                  <Upload className="mr-3 h-6 w-6" />
                  Upload File
                </Button>
                <Button 
                  variant="outline"
                  className="h-16 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600/50 hover:border-purple-500 transition-all duration-300"
                >
                  <LinkIcon className="mr-3 h-6 w-6" />
                  Paste URL
                </Button>
              </div>

              {/* Drop Zone */}
              <div className="border-2 border-dashed border-gray-600 rounded-xl p-12 text-center hover:border-purple-500 transition-colors duration-300 cursor-pointer group">
                <Upload className="mx-auto h-16 w-16 text-gray-500 group-hover:text-purple-400 transition-colors mb-4" />
                <p className="text-gray-400 mb-2">Click to upload</p>
                <p className="text-sm text-gray-500">MP4, MOV, AVI, MP3, WAV (max 2GB)</p>
              </div>

              {/* Generate Button */}
              <Button 
                size="lg" 
                className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Sparkles className="mr-3 h-5 w-5" />
                Generate Viral Clips
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10x</div>
              <p className="text-gray-400">Faster Content Creation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <p className="text-gray-400">Higher Engagement Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <p className="text-gray-400">Video Templates</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
