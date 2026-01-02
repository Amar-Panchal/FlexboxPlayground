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
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  description:
    'Interactive Flexbox and CSS Grid playground. Learn layout concepts visually, test properties live, and generate production-ready CSS.',
  keywords: [
    'flexbox playground',
    'css grid playground',
    'flexbox vs grid',
    'learn flexbox',
    'learn css grid',
    'css layout generator',
    'frontend layout tool',
  ],
  authors: [{ name: 'Amar Panchal' }],
  creator: 'Amar Panchal',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'Flexbox & Grid Playground',
    description:
      'Visual Flexbox & CSS Grid playground for developers. Learn faster with live examples.',
    siteName: 'Flexbox & Grid Playground',
    images: [
      {
        url: '/og-flexbox-grid.png',
        width: 1200,
        height: 630,
        alt: 'Flexbox and Grid Playground',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flexbox & Grid Playground',
    description:
      'Practice Flexbox & CSS Grid visually. Perfect for frontend developers.',
    images: ['/og-flexbox-grid.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  category: 'Web Development',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='js-focus-visible' data-js-focus-visible=''>
      <head>
        <Script
          async
          strategy='afterInteractive'
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXX'
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
