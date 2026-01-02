import GoogleAd from '@/components/GoogleAd';
import Playground from '@/components/Playground';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Flexbox & Grid Playground',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  description:
    'Interactive CSS Flexbox and Grid playground built with React and Material UI',
  keywords: [
    'CSS Flexbox',
    'CSS Grid',
    'Flexbox Playground',
    'Grid Playground',
    'React',
    'Material UI',
    'flexbox',
    'flexbox playground',
    'css flexbox tool',
    'flexbox generator',
    'flexbox layout',
  ],
  authors: [{ name: 'Amar Panchal' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};
export default function Page() {
  return (
    <>
      {' '}
      <Script
        async
        strategy='afterInteractive'
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7606956576311759'
        crossOrigin='anonymous'
      />
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6'>
        {/* Header - Server Rendered */}
        <header className='mb-4'>
          <h2 className='text-3xl font-bold mb-2 bg-gradient-to-r from-gray-800 via-slate-600 to-gray-900 bg-clip-text text-transparent'>
            Flexbox Playground
          </h2>
        </header>
        <div className='max-w-[96rem] mx-auto'>
          <Playground />
        </div>
        <GoogleAd />
      </main>
    </>
  );
}
