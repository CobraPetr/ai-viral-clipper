'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Clock, Users, Zap, Shield, Gift, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function OfferSection() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section 6 & 7: Offer + CTA & Scarcity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Choice
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have two options. Choose wisely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Option 1: Figure it out yourself */}
            <div className="bg-red-900/20 p-8 rounded-2xl border border-red-500/30">
              <div className="text-center">
                <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold text-red-400 mb-4">Option 1</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Figure it out yourself. You'll likely lose months (or years) and miss out on income you could've made.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-red-300">
                    <span className="mr-3">❌</span>
                    <span>Spend months learning video editing</span>
                  </div>
                  <div className="flex items-center text-red-300">
                    <span className="mr-3">❌</span>
                    <span>Buy expensive editing software</span>
                  </div>
                  <div className="flex items-center text-red-300">
                    <span className="mr-3">❌</span>
                    <span>Create inconsistent content</span>
                  </div>
                  <div className="flex items-center text-red-300">
                    <span className="mr-3">❌</span>
                    <span>Miss viral opportunities</span>
                  </div>
                  <div className="flex items-center text-red-300">
                    <span className="mr-3">❌</span>
                    <span>Burn out from manual work</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 2: Join AI Viral Clipper */}
            <div className="bg-green-900/20 p-8 rounded-2xl border border-green-500/30 relative">
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                RECOMMENDED
              </div>
              <div className="text-center">
                <Star className="mx-auto h-16 w-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-green-400 mb-4">Option 2</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Join AI Viral Clipper - I show you everything to go from zero to $10k/month in viral content.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-green-300">
                    <span className="mr-3">✅</span>
                    <span>AI-powered viral content creation</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <span className="mr-3">✅</span>
                    <span>25+ professional templates</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <span className="mr-3">✅</span>
                    <span>Automated caption generation</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <span className="mr-3">✅</span>
                    <span>Platform optimization</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <span className="mr-3">✅</span>
                    <span>10x faster content creation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing and Scarcity */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Limited Time Offer</h3>
            <p className="text-xl text-purple-100 mb-6">
              The program was set at $3,500. But that's out of reach for too many.
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-2xl text-gray-300 line-through">$3,500</span>
              <span className="text-4xl font-bold text-white">$197</span>
            </div>
            <p className="text-lg text-purple-100 mb-8">
              We're moving to yearly subscription soon at $1,997/year. Get lifetime access today before this offer disappears.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-4">
              Get Lifetime Access Now - $197
            </Button>
          </div>
        </motion.div>

        {/* Section 8 & 9: Bonuses & Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What You Get
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create viral content with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/20">
                <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                  <Zap className="mr-3 h-5 w-5" />
                  Core Training
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• 40+ hours of step-by-step training</li>
                  <li>• AI content analysis mastery</li>
                  <li>• Viral template system</li>
                  <li>• Platform optimization strategies</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                  <Gift className="mr-3 h-5 w-5" />
                  Templates & Tools
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• 25+ professionally designed templates</li>
                  <li>• Automated caption generator</li>
                  <li>• Viral content analyzer</li>
                  <li>• Platform-specific optimizers</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-green-500/20">
                <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                  <Users className="mr-3 h-5 w-5" />
                  Community & Support
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Exclusive creator community</li>
                  <li>• Weekly live Q&A sessions</li>
                  <li>• Direct access to support team</li>
                  <li>• Success story sharing</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/20">
                <h4 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
                  <Clock className="mr-3 h-5 w-5" />
                  Automation Tools
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI content scheduler</li>
                  <li>• Performance tracker</li>
                  <li>• Trend analyzer</li>
                  <li>• Engagement optimizer</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-pink-500/20">
                <h4 className="text-lg font-semibold text-pink-400 mb-3 flex items-center">
                  <Star className="mr-3 h-5 w-5" />
                  Bonus Content
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• BONUS: Advanced AI prompts library</li>
                  <li>• BONUS: Viral content case studies</li>
                  <li>• BONUS: Platform-specific guides</li>
                  <li>• BONUS: Monetization strategies</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Shield className="mr-3 h-5 w-5" />
                  30-Day Money-Back Guarantee
                </h4>
                <p className="text-gray-100">
                  Try AI Viral Clipper risk-free for 30 days. If you're not completely satisfied, 
                  get a full refund. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 10-12: Urgency, Options & Close */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-red-900/20 p-12 rounded-2xl border border-red-500/30 max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              ⚠️ URGENT: Limited Time Only
            </h2>
            
            <div className="space-y-6 text-left">
              <p className="text-xl text-gray-300">
                Right now in 2024 is the best moment in history to start creating viral content with AI. 
                Demand has never been higher.
              </p>
              
              <p className="text-lg text-red-300">
                The more you wait, the more you lose in potential income you could be generating today.
              </p>
              
              <p className="text-lg text-gray-400">
                Businesses and creators are already using AI for content creation. They're spending this money either way. 
                If not you, someone else gets the viral success.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 p-12 rounded-2xl border border-purple-500/30 max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Your Choice
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-4">Take What I Gave You</h3>
                <p className="text-gray-300">
                  Figure it out alone (lose months/years, risk quitting when stuck, miss out on income).
                </p>
              </div>
              
              <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400 mb-4">Join AI Viral Clipper</h3>
                <p className="text-gray-300">
                  Get expert help, proven AI system, and do it faster and cheaper long-term.
                </p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              You can either take action and get what's yours, or sit back and watch others succeed.
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl px-12 py-6">
              Get Lifetime Access Now - $197
            </Button>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-400 mb-4">
              Questions? Contact our support team or message us on WhatsApp.
            </p>
            <p className="text-xl text-white font-semibold">
              See you inside AI Viral Clipper.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
