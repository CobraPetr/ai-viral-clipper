'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-600 to-primary-400 opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-800">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered Viral Content Creation
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Create{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Viral Content
            </span>{' '}
            with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
          >
            Transform your podcasts, videos, and audio into engaging short-form content. 
            Our AI automatically finds viral moments, adds captions, and creates 
            platform-optimized videos for TikTok, Instagram Reels, and YouTube Shorts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/dashboard">
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsPlaying(!isPlaying)}
              className="group"
            >
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-3xl font-bold text-gray-900">10x</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Faster Content Creation</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-3xl font-bold text-gray-900">85%</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Higher Engagement Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-3xl font-bold text-gray-900">25+</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Video Templates</p>
            </div>
          </motion.div>
        </div>

        {/* Demo Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative rounded-2xl bg-gray-900 p-8 shadow-2xl">
            <div className="aspect-video w-full max-w-4xl rounded-lg bg-gray-800 flex items-center justify-center">
              {isPlaying ? (
                <div className="text-center">
                  <div className="mb-4 h-16 w-16 rounded-full bg-primary-600 flex items-center justify-center mx-auto">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-400">Demo video playing...</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-4 h-16 w-16 rounded-full bg-primary-600 flex items-center justify-center mx-auto cursor-pointer hover:bg-primary-700 transition-colors">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-400">Click to play demo</p>
                </div>
              )}
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-primary-500 animate-pulse" />
            <div className="absolute -bottom-4 -right-4 h-6 w-6 rounded-full bg-primary-400 animate-pulse" />
            <div className="absolute top-1/2 -left-8 h-4 w-4 rounded-full bg-primary-300 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
