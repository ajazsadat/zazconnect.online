'use client';

import { useState } from 'react';

export default function ProviderFaq({ faqs }) {
  const [open, setOpen] = useState(0);
  if (!faqs?.length) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-ink mb-8">Frequently asked questions</h2>
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  className="w-full text-left py-5 flex items-start justify-between gap-4"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="font-semibold text-ink">{faq.q}</span>
                  <span className="text-teal text-xl leading-none">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="pb-5 text-muted leading-relaxed text-[15px]">{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
