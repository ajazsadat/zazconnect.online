'use client';

import { SITE, openLiveChat } from '@/lib/site';

export default function LiveAgentClient() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0 hero-mesh opacity-95" />
        <div className="absolute inset-y-0 left-0 w-1.5 bg-mint" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-mint font-semibold tracking-wide text-sm mb-3">{SITE.brandFull}</p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            How would you like to connect for internet services and assistance?
          </h1>
          <p className="text-sm md:text-base text-[#c5dde0] leading-relaxed max-w-2xl">
            Independent comparison and support-routing service — not a carrier. We help you compare plans or get pointed
            to the right resource.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="border border-[var(--line)] bg-white p-8 md:p-10 flex flex-col">
            <p className="text-teal text-sm font-semibold tracking-wide uppercase mb-3">Phone call</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-3">Speak with a live agent</h2>
            <p className="text-muted leading-relaxed mb-8 flex-grow">
              Call our team for plan comparison help, availability questions, or guidance on next steps.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center px-7 py-4 font-bold text-[#0c1c24] bg-mint hover:brightness-110 transition"
            >
              Call Now {SITE.phoneDisplay}
            </a>
          </div>

          <div className="border border-[var(--line)] bg-white p-8 md:p-10 flex flex-col">
            <p className="text-teal text-sm font-semibold tracking-wide uppercase mb-3">Chat</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-3">Chat with a live agent</h2>
            <p className="text-muted leading-relaxed mb-8 flex-grow">
              Start a live chat for quick questions. We&apos;re an independent service — not affiliated with any carrier.
            </p>
            <button
              type="button"
              onClick={openLiveChat}
              className="inline-flex items-center justify-center px-7 py-4 font-bold text-white bg-teal hover:bg-[var(--teal-deep)] transition"
            >
              Chat Now
            </button>
          </div>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto border border-teal/25 bg-white p-6 md:p-8 text-sm text-muted leading-relaxed">
          <p className="font-semibold text-ink mb-2">Important</p>
          <p>
            {SITE.legalName} is an independent comparison and referral service. We do not own or operate any internet
            network and do not provide carrier account support. For billing, outages, or technical issues with an
            existing service, contact your provider through their official channels.
          </p>
        </div>
      </section>
    </div>
  );
}
