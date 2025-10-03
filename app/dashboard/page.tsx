import { Metadata } from 'next';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { RecentProjects } from '@/components/dashboard/RecentProjects';
import { Analytics } from '@/components/dashboard/Analytics';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard - AI Viral Clipper',
  description: 'Create viral content with AI. Manage your projects and track your success.',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Quick Actions */}
          <Suspense fallback={<LoadingSpinner />}>
            <QuickActions />
          </Suspense>

          {/* Analytics */}
          <Suspense fallback={<LoadingSpinner />}>
            <Analytics />
          </Suspense>

          {/* Recent Projects */}
          <Suspense fallback={<LoadingSpinner />}>
            <RecentProjects />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
