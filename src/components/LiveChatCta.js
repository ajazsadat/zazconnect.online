'use client';

import { SITE, openLiveChat } from '@/lib/site';

export default function LiveChatCta({
  title = 'Talk with a live agent',
  description = 'Compare options for your address — independent guidance, not a carrier. Chat live or call our team.',
}) {
  return (
    <section className="border-y border-[var(--line)] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink mb-1">{title}</h2>
          <p className="text-muted text-sm leading-relaxed max-w-xl">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            type="button"
            onClick={openLiveChat}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-[#0c1c24] bg-mint hover:brightness-110 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Live Chat
          </button>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white bg-teal hover:bg-[var(--teal-deep)] transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
