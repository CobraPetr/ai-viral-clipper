'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Video, 
  TrendingUp, 
  Clock, 
  Shield, 
  Palette, 
  Globe,
  Smartphone,
  BarChart3
} from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Analysis',
    description: 'Our advanced AI automatically analyzes your content to identify the most engaging and viral-worthy moments.',
    icon: Brain,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Smart Content Clipping',
    description: 'Automatically extract the best 15-60 second clips from your longer content with perfect timing.',
    icon: Video,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Viral Optimization',
    description: 'Optimize your content for maximum engagement across TikTok, Instagram Reels, and YouTube Shorts.',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Instant Processing',
    description: 'Get your viral content ready in minutes, not hours. Our AI works at lightning speed.',
    icon: Clock,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    name: '25+ Video Templates',
    description: 'Choose from a variety of professional templates including audiograms, quote cards, and more.',
    icon: Palette,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
  {
    name: 'Multi-Platform Ready',
    description: 'Export content optimized for different platforms with the right dimensions and formats.',
    icon: Globe,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    name: 'Mobile-First Design',
    description: 'All content is designed for mobile viewing with vertical formats and mobile-optimized text.',
    icon: Smartphone,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
  },
  {
    name: 'Analytics & Insights',
    description: 'Track performance and get insights on what content performs best for your audience.',
    icon: BarChart3,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    name: 'Secure & Private',
    description: 'Your content is processed securely with enterprise-grade encryption and privacy protection.',
    icon: Shield,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Everything you need to create viral content
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Our AI-powered platform handles everything from content analysis to final video creation, 
            so you can focus on what matters most - creating amazing content.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 px-6 py-12 sm:px-16">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to create your first viral video?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
              Join thousands of creators who are already using AI to create engaging content that drives results.
            </p>
            <div className="mt-8">
              <a
                href="/dashboard"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              >
                Get Started Free
                <Zap className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
