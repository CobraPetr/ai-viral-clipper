import { Metadata } from 'next';
import { UploadInterface } from '@/components/upload/UploadInterface';
import { UploadProgress } from '@/components/upload/UploadProgress';
import { UploadSuccess } from '@/components/upload/UploadSuccess';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Upload Content - AI Viral Clipper',
  description: 'Upload your podcasts, videos, or audio files to create viral content with AI.',
};

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Upload Your Content</h1>
          <p className="mt-2 text-lg text-gray-600">
            Transform your long-form content into viral short-form videos
          </p>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <UploadInterface />
        </Suspense>
      </div>
    </div>
  );
}
