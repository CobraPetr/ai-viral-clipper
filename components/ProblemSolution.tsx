'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Target, DollarSign, Clock, TrendingDown, TrendingUp, CheckCircle } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section 1: Introduction / Real Cause of the Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The New Content Economy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While 20-year-olds are earning doctor-level income from viral content, 
              most creators struggle with outdated methods that don't work anymore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="mr-3 h-8 w-8 text-red-500" />
                Why Most Content Creators Fail
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-red-500/20">
                  <h4 className="text-lg font-semibold text-red-400 mb-3">Manual Editing</h4>
                  <p className="text-gray-300">
                    Spending 10+ hours editing each video manually. Time you could spend creating more content.
                  </p>
                  <div className="mt-3 text-sm text-gray-400">
                    • 40-200 videos needed for $10k/month<br/>
                    • $1k-$5k in editing tools<br/>
                    • Terrible margins ($1k-$4k kept from $10k revenue)
                  </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-red-500/20">
                  <h4 className="text-lg font-semibold text-red-400 mb-3">Inconsistent Quality</h4>
                  <p className="text-gray-300">
                    Some videos go viral, most don't. No system to consistently create engaging content.
                  </p>
                  <div className="mt-3 text-sm text-gray-400">
                    • 33-500 videos monthly needed<br/>
                    • $1k-$5k investment in equipment<br/>
                    • High risk of low-performing content
                  </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-red-500/20">
                  <h4 className="text-lg font-semibold text-red-400 mb-3">Platform Complexity</h4>
                  <p className="text-gray-300">
                    Different formats for TikTok, Instagram, YouTube. Learning curve for each platform.
                  </p>
                  <div className="mt-3 text-sm text-gray-400">
                    • Heavy time investment to find what works<br/>
                    • Failed 20+ times before one success<br/>
                    • Requires self-delivery of all content
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-8 rounded-2xl border border-red-500/30">
              <div className="text-center">
                <TrendingDown className="mx-auto h-16 w-16 text-red-500 mb-6" />
                <h4 className="text-xl font-bold text-white mb-4">The Real Problem</h4>
                <p className="text-gray-300 text-lg">
                  Most creators struggle with the wrong approach to content creation. 
                  They're using outdated methods that require massive time investment 
                  and don't guarantee viral success.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Solution Mechanism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Solution Mechanism
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What would be the ideal content creation system for maximum viral potential?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-8 rounded-2xl border border-green-500/30">
              <div className="text-center">
                <Target className="mx-auto h-16 w-16 text-green-500 mb-6" />
                <h4 className="text-xl font-bold text-white mb-4">The Perfect System</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Handful of videos to reach $10k/month</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Startup capital near $0</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">High margins (keep almost everything)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">High demand for viral content</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Easy fulfillment with AI</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Scalable viral content creation</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="mr-3 h-8 w-8 text-green-500" />
                AI-Powered Viral Content
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-green-500/20">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Automated Analysis</h4>
                  <p className="text-gray-300">
                    Our AI automatically finds the most engaging moments in your content. 
                    No manual editing required.
                  </p>
                  <div className="mt-3 text-sm text-green-400">
                    ✓ Virtually zero startup capital<br/>
                    ✓ 60-97% profit margins<br/>
                    ✓ Automated fulfillment
                  </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-green-500/20">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Viral Optimization</h4>
                  <p className="text-gray-300">
                    Every video is optimized for maximum engagement across all platforms. 
                    Consistent viral potential.
                  </p>
                  <div className="mt-3 text-sm text-green-400">
                    ✓ Platform-specific optimization<br/>
                    ✓ Caption generation<br/>
                    ✓ Trending format templates
                  </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-green-500/20">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Instant Results</h4>
                  <p className="text-gray-300">
                    Get viral-ready content in minutes, not hours. Scale your content creation 
                    without scaling your time investment.
                  </p>
                  <div className="mt-3 text-sm text-green-400">
                    ✓ 10x faster content creation<br/>
                    ✓ 85% higher engagement<br/>
                    ✓ 25+ viral templates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 3: The Damaging Admission & Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-800/50 p-12 rounded-2xl border border-purple-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              The Damaging Admission
            </h2>
            
            <div className="text-left space-y-6 mb-8">
              <p className="text-xl text-gray-300">
                My name is AI Viral Clipper, and I've been helping creators build viral content systems since 2020.
              </p>
              
              <p className="text-lg text-gray-400">
                I've built content systems for major brands, helped creators go from 0 to millions of views, 
                and developed the AI technology that powers viral content creation.
              </p>
              
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                <p className="text-red-300 font-semibold">
                  ⚠️ DISCLAIMER: My results are not guaranteed for others. 
                  Success depends on content quality, market demand, and consistent execution.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Sarah M.</h4>
                <p className="text-sm text-gray-400">$0 in January to 6-figure content business in March, no editing experience.</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Mike R.</h4>
                <p className="text-sm text-gray-400">$37k revenue in month 3 at 85%+ profit margins with AI automation.</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Alex K.</h4>
                <p className="text-sm text-gray-400">Uber driver to $57,000/month viral content creator.</p>
              </div>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-4">[TRANSITION]</h3>
              <p className="text-gray-300 text-lg">
                The core business model: <strong className="text-white">creating viral content for businesses and creators using AI automation.</strong>
              </p>
              <p className="text-gray-400 mt-4">
                "But I don't know how to create viral content..."<br/>
                That's exactly why we built this AI system.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
