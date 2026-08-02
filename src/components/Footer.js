'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROVIDERS, SITE } from '@/lib/site';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/independent-support-help' || pathname === '/live-agent') {
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
            Operated by {SITE.legalName}. Independent comparison and referral — not a carrier.
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
              <Link href="/live-agent" className="hover:text-mint">
                Live Agent
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
            <li>
              <Link href="/privacy-policy" className="hover:text-mint">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="hover:text-mint">
                Terms & Conditions
              </Link>
            </li>
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
      <div className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-8 space-y-3 text-xs leading-relaxed max-w-6xl mx-auto">
        {SITE.footerDisclaimer.map((line) => (
          <p key={line.slice(0, 40)}>{line}</p>
        ))}
        <p className="pt-2 text-[#6f8a92]">
          © {new Date().getFullYear()} {SITE.legalName}. All rights reserved. Provider names and trademarks belong to
          their respective owners and are used for identification and comparison only.
        </p>
      </div>
    </footer>
  );
}
