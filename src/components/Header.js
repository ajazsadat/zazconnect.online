'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PROVIDERS, SITE } from '@/lib/site';

const nav = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [providersOpen, setProvidersOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c1c24]/95 backdrop-blur-md">
      <p className="bg-[#071418] text-[11px] sm:text-xs text-[#b7cbcf] leading-relaxed px-4 py-2 text-center border-b border-white/5">
        {SITE.topDisclaimer}
      </p>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt={`${SITE.brandFull} logo`}
            width={160}
            height={84}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#c5dde0]">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'text-mint' : 'hover:text-mint transition'}
            >
              {item.name}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProvidersOpen((v) => !v)}
              className="hover:text-mint transition inline-flex items-center gap-1"
            >
              Providers
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {providersOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#0c1c24] border border-white/10 shadow-lg py-2">
                {PROVIDERS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block px-4 py-2 text-[#c5dde0] hover:bg-white/5 hover:text-mint"
                    onClick={() => setProvidersOpen(false)}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <a
          href={`tel:${SITE.phoneTel}`}
          className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-[#0c1c24] bg-mint hover:brightness-110 transition"
        >
          {SITE.phoneDisplay}
        </a>

        <button
          type="button"
          className="md:hidden p-2 text-white"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0c1c24] px-4 py-4 space-y-3 text-[#c5dde0]">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="block font-medium" onClick={() => setOpen(false)}>
              {item.name}
            </Link>
          ))}
          <p className="text-xs uppercase tracking-wider text-mint/80 pt-2">Providers</p>
          {PROVIDERS.map((p) => (
            <Link key={p.href} href={p.href} className="block pl-2" onClick={() => setOpen(false)}>
              {p.name}
            </Link>
          ))}
          <a href={`tel:${SITE.phoneTel}`} className="block font-semibold text-mint pt-2">
            Call {SITE.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
