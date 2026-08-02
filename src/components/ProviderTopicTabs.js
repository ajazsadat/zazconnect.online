'use client';

import { useEffect, useState } from 'react';

function labelFromHash(tabs, hash) {
  const clean = String(hash || '').replace(/^#/, '');
  const match = tabs.find((tab) => tab.hash && tab.hash === clean);
  return match?.label ?? tabs[0]?.label ?? '';
}

export default function ProviderTopicTabs({ ariaLabel = 'Provider topics', tabs = [] }) {
  const [active, setActive] = useState(tabs[0]?.label ?? '');

  useEffect(() => {
    if (!tabs.length) return undefined;

    const sync = () => setActive(labelFromHash(tabs, window.location.hash));
    sync();
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, [tabs]);

  if (!tabs.length) return null;

  return (
    <nav aria-label={ariaLabel} className="border-b border-[var(--line)] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-0" role="tablist">
          {tabs.map((tab) => {
            const isActive = active === tab.label;
            return (
              <li key={tab.label} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    if (tab.hash) {
                      window.history.pushState(null, '', `#${tab.hash}`);
                    } else {
                      window.history.pushState(null, '', window.location.pathname + window.location.search);
                    }
                    setActive(tab.label);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`inline-flex cursor-pointer select-none px-4 sm:px-5 py-3.5 text-sm sm:text-base font-semibold border-b-2 transition-colors ${
                    isActive
                      ? 'border-teal text-teal'
                      : 'border-transparent text-muted hover:text-ink hover:border-[var(--line)]'
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
