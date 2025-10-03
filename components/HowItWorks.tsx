'use client';

import { motion } from 'framer-motion';
import { Upload, Brain, Zap, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const steps = [
  {
    step: '01',
    title: 'Upload Your Content',
    description: 'Simply upload your podcast, video, or audio file. Our AI handles everything from there.',
    icon: Upload,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
  },
  {
    step: '02',
    title: 'AI Finds Viral Moments',
    description: 'Our advanced AI analyzes your content and identifies the most engaging, shareable moments.',
    icon: Brain,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
  },
  {
    step: '03',
    title: 'Auto-Generate Videos',
    description: 'Get professional viral videos with captions, effects, and platform optimization in minutes.',
    icon: Zap,
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
  },
  {
    step: '04',
    title: 'Download & Share',
    description: 'Download your viral-ready content and watch your engagement skyrocket across all platforms.',
    icon: Download,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            From Upload to Viral in 4 Simple Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            No editing skills required. No hours of work. Just upload, and our AI does the rest.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${step.bgColor}`}>
                      <step.icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="text-sm font-semibold text-purple-400">{step.step}</div>
                    <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-300">{step.description}</p>
                  </div>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-400 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 px-6 py-12 shadow-xl sm:px-16">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Create Your First Viral Video?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Join thousands of creators who are already using AI to create engaging content that drives results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Start Creating Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Watch 2-Min Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              No credit card required • 5-minute setup • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
