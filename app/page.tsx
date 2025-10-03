import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProblemSolution } from '@/components/ProblemSolution';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { OfferSection } from '@/components/OfferSection';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Viral Clipper - Create Viral Content with AI',
  description: 'Transform your podcasts, videos, and audio into viral short-form content for TikTok, Instagram Reels, and YouTube Shorts.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <OfferSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}