'use client';

import { useEffect } from 'react';
import IndependentSupportHelp from '@/components/IndependentSupportHelp';

export default function ProviderMobileSupportModal() {
  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const previousOverflow = document.body.style.overflow;

    const syncLock = () => {
      document.body.style.overflow = media.matches ? 'hidden' : previousOverflow;
    };

    syncLock();
    media.addEventListener('change', syncLock);

    return () => {
      media.removeEventListener('change', syncLock);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Internet services and assistance"
    >
      <IndependentSupportHelp fullscreen />
    </div>
  );
}
