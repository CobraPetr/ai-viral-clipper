'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Clock, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const guarantees = [
  {
    icon: Clock,
    text: 'Create your first viral video in under 5 minutes',
  },
  {
    icon: Shield,
    text: '30-day money-back guarantee',
  },
  {
    icon: CheckCircle,
    text: 'No credit card required to start',
  },
];

export function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Zap className="mr-2 h-4 w-4" />
              Limited Time: Free Forever Plan
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Ready to Go Viral?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-primary-100 sm:text-xl"
          >
            Join 50,000+ creators who are already using AI to create viral content. 
            Start your free account today and create your first viral video in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-50 group"
            >
              Start Creating Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Watch 2-Min Demo
            </Button>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center justify-center gap-x-2">
                <guarantee.icon className="h-5 w-5 text-primary-200" />
                <span className="text-sm text-primary-100">{guarantee.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-sm text-primary-200">
              Trusted by creators at
            </p>
            <div className="mt-4 flex items-center justify-center gap-x-8">
              <div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white text-xs font-semibold">TikTok</span>
              </div>
              <div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white text-xs font-semibold">Instagram</span>
              </div>
              <div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white text-xs font-semibold">YouTube</span>
              </div>
              <div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white text-xs font-semibold">Twitter</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-white/20 to-white/10"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
