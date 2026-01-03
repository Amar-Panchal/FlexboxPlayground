import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import SeoSchema from '@/components/SeoSchema';

export const metadata: Metadata = {
  title: {
    default: 'Flexbox & Grid Playground – Learn CSS Layout Visually',
    template: '%s | Flexbox & Grid Playground',
  },
  description:
    'Interactive Flexbox and CSS Grid playground. Learn layout concepts visually.',
  keywords: [
    'flexbox playground',
    'css grid playground',
    'learn flexbox',
    'learn css grid',
  ],
  authors: [{ name: 'Amar Panchal' }],
  creator: 'Amar Panchal',
  robots: {
    index: true,
    follow: true,
  },
    verification: {
      google: 'rr2dfq3TWwpnNBHBcyDm27FbOg0J0bn80kEyrxCcwWI',
        },

  
  other: {
    'google-adsense-account': 'ca-pub-7606956576311759',
  },
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        {/* ✅ MUST be beforeInteractive */}<meta
                  name="google-site-verification"
                            content="rr2dfq3TWwpnNBHBcyDm27FbOg0J0bn80kEyrxCcwWI"
                                    />
        <Script
          async
          strategy='beforeInteractive'
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7606956576311759'
          crossOrigin='anonymous'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SeoSchema />
        {children}
      </body>
    </html>
  );
}
