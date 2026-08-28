'use client';

import Image from 'next/image';
import Link from 'next/link';
import HideLiveChat from '@/components/HideLiveChat';
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

const cardClass =
  'flex flex-col items-center border border-[var(--line)] bg-white p-6 text-center shadow-sm sm:p-8';
const badgeClass = 'flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal/10';
const actionClass =
  'mt-6 inline-flex w-full min-h-[54px] items-center justify-center gap-2 px-5 text-base font-bold transition';

export default function ConnectOptions({ disclosure, showAddress = false }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <HideLiveChat />
      <div className="absolute inset-0 soft-grid opacity-70" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center px-4 py-10 sm:px-6 sm:py-14">
        <Link href="/" className="inline-flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt={`${SITE.brandFull} logo`}
            width={180}
            height={95}
            className="h-11 w-auto sm:h-14"
            priority
          />
        </Link>

        <h1 className="mt-7 max-w-2xl text-center font-display text-[26px] font-extrabold leading-tight tracking-tight text-ink sm:mt-9 sm:text-4xl">
          How would you like to connect?
        </h1>
        <p className="mt-3 max-w-xl text-center text-[15px] leading-relaxed text-muted sm:text-base">
          Pick whichever is easiest — we&apos;ll help you compare internet and TV plans available at your address.
        </p>

        <div className="mt-8 grid w-full gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          <div className={cardClass}>
            <span className={badgeClass}>
              <Image
                src="/images/support/human-agent-icon.png"
                alt=""
                width={218}
                height={216}
                className="h-10 w-10 object-contain"
              />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold text-ink sm:text-2xl">Call to compare now</h2>
            <p className="mt-2 flex-grow text-[15px] leading-relaxed text-muted">
              Speak with our team and get plan options for your address.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className={`${actionClass} bg-mint text-[#0c1c24] hover:brightness-110`}>
              <PhoneIcon className="h-5 w-5 shrink-0" />
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className={cardClass}>
            <span className={badgeClass}>
              <MessageIcon className="h-7 w-7 text-teal" />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold text-ink sm:text-2xl">Send a message</h2>
            <p className="mt-2 flex-grow text-[15px] leading-relaxed text-muted">
              Prefer not to call? Fill out our contact form and we&apos;ll follow up.
            </p>
            <Link href="/contact" className={`${actionClass} bg-teal text-white hover:bg-[var(--teal-deep)]`}>
              Go to contact form
            </Link>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted sm:mt-10 sm:text-sm">
          {disclosure}
        </p>

        {showAddress && (
          <p className="mt-6 text-center text-xs text-muted sm:mt-8">
            {SITE.addressLine1}, {SITE.addressLine2}
          </p>
        )}
      </div>
    </div>
  );
}
