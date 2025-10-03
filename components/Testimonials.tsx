'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Zap } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Podcast Host',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    content: 'My podcast went from 1K to 100K followers in 3 months using AI Viral Clipper. The AI found moments I never knew were gold.',
    rating: 5,
    metric: '100K followers',
    metricIcon: Users,
  },
  {
    name: 'Marcus Johnson',
    role: 'Content Creator',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    content: 'I was spending 8 hours editing each video. Now I upload and get 10 viral clips in 5 minutes. This changed everything.',
    rating: 5,
    metric: '10x faster',
    metricIcon: Zap,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Agency Owner',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    content: 'Our client engagement increased by 300% after switching to AI Viral Clipper. The ROI is incredible.',
    rating: 5,
    metric: '300% engagement',
    metricIcon: TrendingUp,
  },
  {
    name: 'David Kim',
    role: 'YouTuber',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    content: 'I went from 50K to 500K subscribers in 6 months. The AI finds the perfect moments every time.',
    rating: 5,
    metric: '500K subscribers',
    metricIcon: Users,
  },
  {
    name: 'Lisa Wang',
    role: 'Business Coach',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    content: 'My course sales tripled after creating viral clips from my long-form content. This tool is a game-changer.',
    rating: 5,
    metric: '3x sales',
    metricIcon: TrendingUp,
  },
  {
    name: 'Alex Thompson',
    role: 'Fitness Influencer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    content: 'I create 20 viral videos per week now. My engagement rate went from 2% to 15%. Absolutely insane results.',
    rating: 5,
    metric: '15% engagement',
    metricIcon: TrendingUp,
  },
];

const stats = [
  { label: 'Active Users', value: '50K+' },
  { label: 'Videos Created', value: '2M+' },
  { label: 'Average Engagement', value: '12x' },
  { label: 'Success Rate', value: '94%' },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Loved by creators worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Join thousands of creators who are already using AI to create viral content that drives real results.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4 lg:max-w-none"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-white p-8 shadow-lg"
            >
              <Quote className="absolute top-6 left-6 h-8 w-8 text-primary-200" />
              
              <div className="flex items-center gap-x-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <div className="text-base font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">"{testimonial.content}"</p>
              </div>

              <div className="mt-6 flex items-center gap-x-2">
                <testimonial.metricIcon className="h-5 w-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">{testimonial.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-white px-6 py-8 shadow-lg sm:px-16">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Trusted by leading brands and creators
            </h3>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div className="flex items-center justify-center">
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">Brand 1</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">Brand 2</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">Brand 3</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">Brand 4</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
