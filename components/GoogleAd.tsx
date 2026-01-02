'use client';

import { useEffect } from 'react';

export default function GoogleAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client='ca-pub-XXXXXX'
      data-ad-slot='1234567890'
      data-ad-format='auto'
      data-full-width-responsive='true'
    />
  );
}
