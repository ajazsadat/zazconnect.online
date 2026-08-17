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

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Link href="/" className="mb-5 inline-flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt={`${SITE.brandFull} logo`}
            width={180}
            height={95}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <h1 className="mb-6 max-w-3xl text-center font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Call now and we&apos;ll walk you through your options.
        </h1>

        <div className="grid w-full gap-4 md:grid-cols-2 md:gap-5">
          <div className="flex flex-col border border-[var(--line)] bg-white p-5 sm:p-6">
            <Image
              src="/images/support/human-agent-icon.png"
              alt=""
              width={218}
              height={216}
              className="mb-4 h-auto w-[28%] max-w-[88px]"
            />
            <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">Phone Call</h2>
            <p className="mt-2 mb-5 flex-grow text-sm text-muted leading-relaxed sm:text-base">
              to speak with a live agent
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-auto inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 font-bold text-[#0c1c24] bg-mint hover:brightness-110 transition"
            >
              <PhoneIcon className="h-5 w-5" />
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="flex flex-col border border-[var(--line)] bg-white p-5 sm:p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center bg-teal/10 text-teal">
              <MessageIcon className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">Contact Form</h2>
            <p className="mt-2 mb-5 flex-grow text-sm text-muted leading-relaxed sm:text-base">
              Prefer not to call? Fill out our contact form and we&apos;ll follow up.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 font-bold text-white bg-teal hover:bg-[var(--teal-deep)] transition"
            >
              Go to Contact Form
            </Link>
          </div>
        </div>

        <p className="page-disclaimer mt-6 max-w-3xl text-center text-xs text-muted leading-relaxed sm:text-sm">
          {`${SITE.brandFull} is an independent, authorized reseller. We do not provide internet, TV, or phone services directly, and we are not owned, operated, or controlled by any internet service provider (ISP) or carrier. For billing or existing account support, please contact your provider directly.`}
        </p>
      </div>
    </div>
  );
}
