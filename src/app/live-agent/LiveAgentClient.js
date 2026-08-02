'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SITE, openLiveChat } from '@/lib/site';

export default function LiveAgentClient() {
  return (
    <div className="relative overflow-hidden bg-[var(--background)] min-h-screen">
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

        <h1 className="mb-2 max-w-3xl text-center font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Speak with a live agent
        </h1>
        <p className="mb-6 max-w-2xl text-center text-sm text-muted leading-relaxed sm:text-base">
          Call now and we&apos;ll walk you through your options.
        </p>

        <div className="grid w-full gap-4 md:grid-cols-2 md:gap-5">
          <div className="flex flex-col border border-[var(--line)] bg-white p-5 sm:p-6">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex w-full items-center justify-center px-5 py-3.5 font-bold text-[#0c1c24] bg-mint hover:brightness-110 transition"
            >
              Call Now {SITE.phoneDisplay}
            </a>
          </div>

          <div className="flex flex-col border border-[var(--line)] bg-white p-5 sm:p-6">
            <button
              type="button"
              onClick={openLiveChat}
              className="inline-flex w-full items-center justify-center px-5 py-3.5 font-bold text-white bg-teal hover:bg-[var(--teal-deep)] transition"
            >
              Chat Now
            </button>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-center text-xs text-muted leading-relaxed sm:text-sm">
          {`${SITE.legalName} is an independent comparison and referral service. We do not own or operate any internet network and do not provide carrier account support. For billing, outages, or technical issues with an existing service, contact your provider through their official channels.`}
        </p>
      </div>
    </div>
  );
}
