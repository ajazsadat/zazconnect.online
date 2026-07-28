import { SITE } from '@/lib/site';
import ProviderFaq from '@/components/ProviderFaq';
import ProviderComparisonTable from '@/components/ProviderComparisonTable';
import LiveChatCta from '@/components/LiveChatCta';

export default function ProviderPage({
  name,
  brandMark,
  tagline,
  introTitle,
  benefits = [],
  plansNote,
  plans = [],
  contentSections = [],
  faqs = [],
}) {
  const displayName = brandMark || name;

  return (
    <div className="bg-[var(--background)] min-h-screen">
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0 hero-mesh opacity-95" />
        <div className="absolute inset-y-0 left-0 w-1.5 bg-mint" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-mint font-semibold tracking-wide text-sm mb-3">{SITE.brandFull}</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white tracking-tight max-w-3xl">
            {name} Internet &amp; Cable Services
          </h1>
          <p className="mt-4 text-lg text-[#c5dde0] max-w-2xl leading-relaxed">{tagline}</p>
        </div>
      </section>

      <LiveChatCta
        title="Call to get assistance to compare providers"
        description={`Talk through ${displayName} and other options for your address — independent guidance, not a carrier. Chat live or call our team.`}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
            {introTitle || `Compare ${displayName} with ${SITE.brandFull}`}
          </h2>
          <p className="text-muted leading-relaxed">
            {SITE.brandFull} (operated by {SITE.legalName}) is an independent comparison and referral platform. Call to
            get assistance to compare providers — we help you review {name} options alongside other providers so you can
            choose what fits, then enroll directly with the provider.
          </p>
        </div>
        <ul className="space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex gap-3 text-[15px] text-[#2a4550] border-l-2 border-teal pl-4 py-1">
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white border-y border-[var(--line)] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-3">Plan tiers to compare</h2>
            <p className="text-sm text-muted leading-relaxed">
              {plansNote ||
                `*Pricing may vary by ZIP code and is subject to change. Details shown are based on publicly available ${name} information and may not reflect current offers. Taxes, fees, and equipment costs are extra.`}
            </p>
          </div>
          <div className="divide-y divide-[var(--line)] border border-[var(--line)]">
            {plans.map((plan) => (
              <div
                key={plan.name || plan.speed}
                className="grid md:grid-cols-[1fr_auto_auto] gap-4 md:items-center px-5 py-6 hover:bg-[#f7fbfc] transition"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{plan.name || plan.speed}</h3>
                  {(plan.subtitle || plan.speed) && plan.name && (
                    <p className="mt-1 text-sm text-teal">{plan.subtitle || plan.speed}</p>
                  )}
                  <ul className="mt-3 space-y-1 text-sm text-muted">
                    {(plan.features || []).map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:text-right">
                  <p className="text-xs uppercase tracking-wider text-muted">From</p>
                  <p className="font-display text-3xl font-bold text-ink">
                    ${plan.price}
                    <span className="text-base font-medium text-muted">/mo*</span>
                  </p>
                </div>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-teal hover:bg-[var(--teal-deep)] transition self-start md:self-center"
                >
                  Check availability
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {contentSections.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
          {contentSections.map((section) => (
            <div key={section.title} className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-10">
              <h3 className="font-display text-xl font-bold text-ink">{section.title}</h3>
              <p className="text-muted leading-relaxed">{section.body}</p>
            </div>
          ))}
        </section>
      )}

      <ProviderComparisonTable />
      <ProviderFaq faqs={faqs} />

      <section className="pb-16 px-4 text-center">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-teal hover:bg-[var(--teal-deep)] transition"
        >
          Call {SITE.phoneDisplay} to get assistance to compare providers
        </a>
      </section>
    </div>
  );
}
