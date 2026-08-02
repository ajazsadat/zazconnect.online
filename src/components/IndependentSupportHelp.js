'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

function PhoneIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MessageIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export default function IndependentSupportHelp({ fullscreen = false }) {
  return (
    <div
      className={`relative overflow-hidden bg-[var(--background)] text-[var(--foreground)] ${
        fullscreen ? 'min-h-full' : 'min-h-screen'
      }`}
    >
      <div className="absolute inset-0 soft-grid opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-mint/20 blur-3xl animate-drift"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-16 h-64 w-64 rounded-full bg-teal/15 blur-3xl animate-drift"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Link href="/" className="mb-8 inline-flex items-center justify-center animate-fade-up">
          <Image
            src="/images/logo.png"
            alt={`${SITE.brandFull} logo`}
            width={180}
            height={95}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <h1 className="mb-3 max-w-3xl text-center font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl animate-fade-up-delay">
          How Would You Like To Get Help Comparing Providers?
        </h1>
        <p className="mb-10 max-w-2xl text-center text-base text-muted leading-relaxed sm:text-lg animate-fade-up-delay">
          Choose how you want to connect with {SITE.brandFull} — independent comparison help, not carrier account
          support.
        </p>

        <div className="grid w-full gap-5 md:grid-cols-2 md:gap-6 animate-fade-up-delay-2">
          <div className="flex flex-col border border-[var(--line)] bg-white p-7 sm:p-9">
            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-teal/10 text-teal">
              <PhoneIcon className="h-6 w-6" />
            </div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-[28px]">Speak With A Live Agent</h2>
            <p className="mt-3 flex-grow text-muted leading-relaxed">
              Call now and we&apos;ll walk you through your options.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold text-[#0c1c24] bg-mint hover:brightness-110 transition"
            >
              <PhoneIcon className="h-5 w-5" />
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="flex flex-col border border-[var(--line)] bg-white p-7 sm:p-9">
            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-teal/10 text-teal">
              <MessageIcon className="h-6 w-6" />
            </div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-[28px]">Send Us a Message</h2>
            <p className="mt-3 flex-grow text-muted leading-relaxed">
              Prefer not to call? Fill out our contact form and we&apos;ll follow up.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold text-white bg-teal hover:bg-[var(--teal-deep)] transition"
            >
              Go to Contact Form
            </Link>
          </div>
        </div>

        <p className="page-disclaimer mt-10 max-w-3xl text-center text-sm text-muted leading-relaxed">
          {`${SITE.brandFull} is an independent comparison resource. We do not provide internet, TV, or phone services directly, and we are not affiliated with Spectrum, Xfinity, AT&T, Verizon, or any other carrier. For billing or existing account support, please contact your provider directly.`}
        </p>
      </div>
    </div>
  );
}
