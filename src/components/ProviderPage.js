import Link from 'next/link';
import { SITE } from '@/lib/site';
import ProviderFaq from '@/components/ProviderFaq';
import ProviderComparisonTable from '@/components/ProviderComparisonTable';
import ProviderTopicTabs from '@/components/ProviderTopicTabs';
import ContactForm from '@/components/ContactForm';

function ServiceGlanceIcon({ name: iconName }) {
  const common = {
    className: 'w-6 h-6 text-teal',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  };

  if (iconName === 'tv') {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5v10.5H3.75V5.25zM8.25 19.5h7.5M12 15.75v3.75" />
      </svg>
    );
  }
  if (iconName === 'phone') {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a1.5 1.5 0 001.5-1.5v-2.1a1.5 1.5 0 00-1.15-1.46l-3.05-.76a1.5 1.5 0 00-1.55.58l-.72 1.01a11.28 11.28 0 01-5.3-5.3l1.01-.72a1.5 1.5 0 00.58-1.55l-.76-3.05A1.5 1.5 0 007.85 4.5H5.75a1.5 1.5 0 00-1.5 1.5v.75z"
        />
      </svg>
    );
  }
  if (iconName === 'mobile') {
    return (
      <svg {...common}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3.75h6A1.5 1.5 0 0116.5 5.25v13.5a1.5 1.5 0 01-1.5 1.5H9a1.5 1.5 0 01-1.5-1.5V5.25A1.5 1.5 0 019 3.75zM12 17.25h.008v.008H12v-.008z"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.136 11.886a9.75 9.75 0 0113.728 0M2 8.75a14.25 14.25 0 0120 0M12 18.75h.008v.008H12v-.008z"
      />
    </svg>
  );
}

export default function ProviderPage({
  name,
  brandMark,
  tagline,
  heroTitle,
  introTitle,
  benefits = [],
  plansNote,
  plans = [],
  contentSections = [],
  faqs = [],
  topicTabs = [],
  servicesGlance,
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
            {heroTitle || `Compare ${name} internet and cable services With ${SITE.brandFull}`}
          </h1>
          <p className="mt-4 text-lg text-[#c5dde0] max-w-2xl leading-relaxed">{tagline}</p>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[#0c1c24]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-center">
          <Link
            href="/compare-internet-options"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-semibold text-[#0c1c24] bg-mint hover:brightness-110 transition"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Speak With A Live Agent
          </Link>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-semibold text-white border border-white/25 bg-white/5 hover:bg-white/10 transition"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call to compare — {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      {topicTabs.length > 0 && (
        <ProviderTopicTabs ariaLabel={`${name} topics`} tabs={topicTabs} />
      )}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
            {introTitle || `Compare ${displayName} with ${SITE.brandFull}`}
          </h2>
          <p className="text-muted leading-relaxed">
            {SITE.brandFull} (operated by {SITE.legalName}) is an independent comparison and referral platform. Call to
            compare providers — we help you review {name} options alongside other providers so you can choose what fits,
            then enroll directly with the provider.
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

      {servicesGlance?.items?.length > 0 && (
        <section className="border-y border-[var(--line)] bg-[#f7fbfc] py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-3">
                {servicesGlance.title || `${name} Services at a Glance`}
              </h2>
              {servicesGlance.intro && (
                <p className="text-muted leading-relaxed">{servicesGlance.intro}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {servicesGlance.items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="w-12 h-12 shrink-0 bg-teal/10 flex items-center justify-center">
                    <ServiceGlanceIcon name={item.icon} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink mb-2">{item.title}</h3>
                    <p className="text-muted text-[15px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProviderComparisonTable />
      <ProviderFaq faqs={faqs} />

      <section className="w-full bg-[#eef5f7] border-t border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-5">
                Why Choose <span className="text-teal">{SITE.brandFull}</span>?
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
                {`Getting ${displayName} Internet & Cable Services is easier with ${SITE.brandFull}. Call to compare providers, understand features and pricing, and select the option that works best for your home or business. Our team guides you every step of the way — clear, reliable, and hassle-free.`}
              </p>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center justify-center px-7 py-3.5 font-bold text-white bg-teal hover:bg-[var(--teal-deep)] transition"
              >
                Call to compare providers
              </a>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-[#2a4550]">
                  <span className="w-10 h-10 bg-teal/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <a href={`tel:${SITE.phoneTel}`} className="font-semibold hover:text-teal transition-colors">
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-[#2a4550]">
                  <span className="w-10 h-10 bg-teal/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <a href={`mailto:${SITE.email}`} className="font-semibold hover:text-teal transition-colors break-all">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-[#2a4550]">
                  <span className="w-10 h-10 bg-teal/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold leading-snug pt-2">
                    {SITE.addressLine1}
                    <br />
                    {SITE.addressLine2}
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-xs text-muted leading-relaxed max-w-xl">
                Pricing, availability, and included services vary by location and plan. Promotions may require AutoPay.
                Equipment and streaming services subject to terms and change.
              </p>
            </div>

            <div className="border border-[var(--line)] bg-white p-7 md:p-9">
              <h3 className="font-display text-2xl font-bold text-ink mb-6">Get Started</h3>
              <ContactForm
                variant="simple"
                defaultInterest={`${displayName} Internet`}
                idPrefix={`${String(displayName).toLowerCase().replace(/[^a-z0-9]+/g, '-')}-contact`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
