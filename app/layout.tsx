import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Viral Clipper - Create Viral Content with AI",
  description: "Transform your podcasts, videos, and audio into viral short-form content for TikTok, Instagram Reels, and YouTube Shorts.",
  keywords: ["AI", "viral content", "video editing", "TikTok", "Instagram Reels", "YouTube Shorts"],
  authors: [{ name: "AI Viral Clipper Team" }],
  openGraph: {
    title: "AI Viral Clipper - Create Viral Content with AI",
    description: "Transform your podcasts, videos, and audio into viral short-form content for TikTok, Instagram Reels, and YouTube Shorts.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Viral Clipper - Create Viral Content with AI",
    description: "Transform your podcasts, videos, and audio into viral short-form content for TikTok, Instagram Reels, and YouTube Shorts.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}