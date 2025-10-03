'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for trying out AI viral content creation',
    icon: Zap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    popular: false,
    features: [
      '3 videos per month',
      'Basic templates',
      'Standard quality',
      'Community support',
      'Mobile app access',
    ],
    cta: 'Get Started Free',
    ctaVariant: 'outline' as const,
  },
  {
    name: 'Creator',
    price: '$29',
    period: 'per month',
    description: 'For serious content creators and influencers',
    icon: Star,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    popular: true,
    features: [
      'Unlimited videos',
      'All 25+ templates',
      'HD quality export',
      'Priority support',
      'Advanced AI features',
      'Custom branding',
      'Analytics dashboard',
      'Team collaboration',
    ],
    cta: 'Start 7-Day Free Trial',
    ctaVariant: 'default' as const,
  },
  {
    name: 'Agency',
    price: '$99',
    period: 'per month',
    description: 'For agencies and teams managing multiple clients',
    icon: Crown,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    popular: false,
    features: [
      'Everything in Creator',
      'White-label solution',
      'Client management',
      'Bulk processing',
      'API access',
      'Custom integrations',
      'Dedicated support',
      'Revenue sharing',
    ],
    cta: 'Contact Sales',
    ctaVariant: 'outline' as const,
  },
];

export function Pricing() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? 'border-primary-600 bg-primary-50 shadow-xl'
                  : 'border-gray-200 bg-white shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-lg ${plan.bgColor}`}>
                  <plan.icon className={`h-6 w-6 ${plan.color}`} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-600">/{plan.period}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary-600 mt-0.5" />
                    <span className="ml-3 text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  variant={plan.ctaVariant}
                  size="lg"
                  className={`w-full group ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : ''
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gray-50 px-6 py-8 sm:px-16">
            <h3 className="text-lg font-semibold text-gray-900">
              All plans include:
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">30-day money-back guarantee</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">Cancel anytime</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">24/7 customer support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
