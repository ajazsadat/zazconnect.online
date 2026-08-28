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
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      <HideLiveChat />

      <div className="relative flex flex-1 flex-col overflow-hidden">
        <div className="absolute inset-0 soft-grid opacity-70" aria-hidden="true" />

        <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center px-4 py-10 sm:px-6 sm:py-14">
          <h1 className="max-w-3xl text-center font-display text-[26px] font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            How would you like to connect
            <span className="block">for Internet and TV Services?</span>
          </h1>

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
              <Link href="/contact" className={`${actionClass} bg-teal text-white hover:bg-[var(--teal-deep)]`}>
                Go to contact form
              </Link>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted sm:mt-10 sm:text-sm">
            {disclosure}
          </p>

          {showAddress && (
            <div className="mt-8 w-full border-t border-[var(--line)] pt-6 sm:mt-10">
              {/*
                Kept in the markup but visually hidden, mirroring the reference site's
                agent pages. Do not "fix" the hidden class — it is intentional.
              */}
              <nav aria-label="Legal" className="hidden">
                <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted">
                  {SITE.legalLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:text-teal hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="text-center text-xs text-muted">
                {SITE.addressLine1}, {SITE.addressLine2}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* The logo artwork is white, so it needs a dark band to stay legible. */}
      <div className="bg-[#0c1c24]">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-center px-4 py-7 sm:px-6 sm:py-8">
          <Link href="/" className="inline-flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt={`${SITE.brandFull} logo`}
              width={320}
              height={169}
              className="h-16 w-auto sm:h-20"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
