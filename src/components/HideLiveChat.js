'use client';

import { useEffect } from 'react';

/** Tawk.to loads globally from the root layout; this opts a single page out of it. */
export default function HideLiveChat() {
  useEffect(() => {
    let cancelled = false;
    const api = (window.Tawk_API = window.Tawk_API || {});

    if (typeof api.hideWidget === 'function') {
      api.hideWidget();
    } else {
      const previousOnLoad = api.onLoad;
      api.onLoad = function () {
        if (typeof previousOnLoad === 'function') previousOnLoad();
        if (!cancelled && typeof window.Tawk_API?.hideWidget === 'function') {
          window.Tawk_API.hideWidget();
        }
      };
    }

    return () => {
      cancelled = true;
      if (typeof window.Tawk_API?.showWidget === 'function') {
        window.Tawk_API.showWidget();
      }
    };
  }, []);

  return null;
}
