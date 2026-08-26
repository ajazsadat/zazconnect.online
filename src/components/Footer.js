'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROVIDERS, SITE } from '@/lib/site';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/contact-us-to-compare') {
    return null;
  }

  return (
    <footer className="bg-[#0c1c24] text-[#9db4bb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Image
            src="/images/logo.png"
            alt={`${SITE.brandFull} logo`}
            width={180}
            height={95}
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed">
            Operated by {SITE.legalName}. Independent comparison platform — not a carrier.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Quick links</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-mint">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-mint">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-mint">
                Contact Us
              </Link>
            </li>
            {PROVIDERS.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="hover:text-mint">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-white font-semibold mb-3 mt-8">Legal</p>
          <ul className="space-y-2 text-sm">
            {SITE.legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-mint">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-mint">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-mint">
                {SITE.email}
              </a>
            </li>
            <li>
              {SITE.addressLine1}
              <br />
              {SITE.addressLine2}
            </li>
          </ul>
        </div>
      </div>
      <div
        id="disclaimer"
        className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto scroll-mt-28"
      >
        <h2 className="font-display text-lg md:text-xl font-bold text-white mb-3">Disclaimer:</h2>
        <p className="text-[13px] leading-relaxed text-[#b7cbcf]">{SITE.beforeFooterDisclaimer}</p>
      </div>
      <div className="border-t border-white/10 bg-[#071418]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <Link
            href="/#disclaimer"
            className="inline-flex w-fit font-semibold text-white hover:text-mint transition"
          >
            Disclaimer
          </Link>
          <p className="text-[#6f8a92]">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved. Provider names and trademarks belong to
            their respective owners and are used for identification and comparison only.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#071418]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {SITE.footerOfferDisclosures.map((item) => (
              <div key={item.title}>
                <h3 className="text-[12px] font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-[11px] leading-relaxed text-[#6f8a92]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
