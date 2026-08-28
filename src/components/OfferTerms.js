import Link from 'next/link';
import { SITE } from '@/lib/site';

/**
 * Google Ads requires material offer terms to sit with the claim they qualify,
 * not only in the footer. Rendered as <details> so the text stays in the markup
 * and stays reachable without JavaScript.
 */
export default function OfferTerms({ providerName }) {
  return (
    <details className="group mt-3">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-teal underline underline-offset-2 hover:text-[var(--teal-deep)]">
        Learn More
        <svg
          className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <div className="mt-4 border border-[var(--line)] bg-[#f7fbfc] p-5">
        <p className="text-[13px] leading-relaxed text-muted">
          {SITE.providerPlanDetailsNote(providerName)}
        </p>
        <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {SITE.footerOfferDisclosures.map((item) => (
            <div key={item.title}>
              <h4 className="text-[13px] font-semibold text-ink">{item.title}</h4>
              <p className="mt-1 text-[12px] leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[12px] leading-relaxed text-muted">
          {SITE.providerStatusDisclaimer(providerName)}{' '}
          <Link href="/fees-disclosures" className="text-teal underline hover:text-[var(--teal-deep)]">
            Fees &amp; Disclosures
          </Link>
        </p>
      </div>
    </details>
  );
}
