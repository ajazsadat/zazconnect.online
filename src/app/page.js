'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE, openLiveChat } from '@/lib/site';
import LiveChatCta from '@/components/LiveChatCta';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Which internet providers can I find through your platform?',
      a: `${SITE.operatedByLabel} partners with a network of licensed resellers, authorized retailers, and master-dealer distributors representing leading U.S. telecom and internet service brands. Availability and offers vary by ZIP code — call us at ${SITE.phoneDisplay} to view current plan options in your area.`,
    },
    {
      q: 'How do I compare internet providers in my area?',
      a: 'We compare speed, reliability, and pricing across multiple licensed providers so you can pick the plan that fits how you use the internet — streaming, remote work, or gaming.',
    },
    {
      q: 'What does it mean to be an “authorized reseller” or “partner network”?',
      a: `We are not the direct provider of internet, wireless, or cable services. Instead, ${SITE.operatedByLabel} operates as an authorized reseller and licensed retailer for multiple carrier and service networks across the U.S. This means we’re approved to market, compare, and facilitate service orders through official partner and master-dealer programs — giving customers access to more plan options in one place. Services are fulfilled, installed, and billed by the provider you choose.`,
    },
    {
      q: 'Are there any installation or equipment fees?',
      a: 'Any setup, equipment, or activation fees are set by the provider you choose, not by us. We’ll walk you through the full cost breakdown — including taxes and equipment charges — before you commit.',
    },
    {
      q: 'How long do promotional prices last?',
      a: 'Promotional pricing periods vary by provider and offer. We’ll confirm the length of any promo period and what the standard rate becomes afterward.',
    },
    {
      q: 'Who do I contact for support after I’m connected?',
      a: `After activation, technical support, billing, and account management are handled by your selected provider. You can reach us at ${SITE.phoneDisplay} for general questions, plan guidance, or help finding the right contact at your provider.`,
    },
  ];

  const pillars = [
    {
      title: 'Coast-to-coast comparison',
      body: 'From metro hubs to suburban neighborhoods, we compare provider options nationwide while keeping comparisons personal.',
    },
    {
      title: 'Up-to-date options',
      body: 'Offers move fast. We keep comparisons current so you see relevant plans for your address and budget.',
    },
    {
      title: 'Clear commitments',
      body: 'Transparency first — honest comparisons, clear next steps, and no claim that we are the carrier.',
    },
  ];

  const categories = [
    {
      title: 'Home internet',
      body: 'Compare fiber, cable, and fixed-wireless speed tiers for streaming, work, and multi-device homes.',
    },
    {
      title: 'TV & entertainment',
      body: 'Review live channels, on-demand libraries, and DVR options that can pair with your internet plan.',
    },
    {
      title: 'Wireless & mobile',
      body: 'Explore nationwide coverage and data plans that may bundle with home service where available.',
    },
    {
      title: 'Home security',
      body: 'Look at monitoring and smart-home options from licensed providers — equipment and terms vary by offer.',
    },
  ];

  const bundles = [
    {
      label: 'Starter',
      title: 'Internet + Basic TV',
      points: ['Everyday-speed internet tier', 'Local & basic channel lineup', 'Single monthly bill'],
    },
    {
      label: 'Most compared',
      title: 'Fast Internet + Full TV',
      points: ['Higher-speed internet tier', 'Expanded channel lineup + DVR', 'Bundled equipment options'],
      featured: true,
    },
    {
      label: 'Premium',
      title: 'Gigabit Internet + Premium TV',
      points: ['Gigabit-tier internet available', 'Premium channels & on-demand', 'Priority installation scheduling'],
    },
  ];

  return (
    <div>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute -right-16 top-24 w-80 h-80 rounded-full bg-mint/20 blur-3xl animate-drift" />
        <div className="absolute left-10 bottom-20 w-64 h-64 rounded-full bg-teal/30 blur-3xl animate-drift" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="animate-fade-up mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-mint">
            {SITE.brandFull}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight animate-fade-up-delay">
            Find Reliable Internet, TV &amp; Wireless Plans Near You
          </h1>
          <p className="mt-5 text-lg text-[#c5dde0] max-w-2xl leading-relaxed animate-fade-up-delay-2">
            We help you compare internet, TV, and home security plans from licensed providers in your area — so you can
            find the option that actually fits your home and budget.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up-delay-2">
            <button
              type="button"
              onClick={openLiveChat}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-[#0c1c24] bg-mint hover:brightness-110 transition"
            >
              Live Chat
            </button>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-white border border-white/30 hover:bg-white/10 transition"
            >
              Call & compare now
            </a>
          </div>
        </div>
      </section>

      <LiveChatCta />

      <section className="relative soft-grid border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Who We Are</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              Independent plan comparison
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              {SITE.operatedByLabel} is an independent, authorized reseller that works with multiple leading
              broadband, cable, and wireless providers. We don’t favor any carrier — our recommendations are based on
              your location, your needs, and your budget.
            </p>
            <p className="text-muted text-lg leading-relaxed mt-4">
              We are not an internet service provider and do not own or operate network infrastructure. All services are
              fulfilled and billed directly by licensed carriers.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {pillars.map((item) => (
              <div key={item.title} className="border-t-2 border-teal pt-5">
                <h3 className="font-display text-xl font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-[var(--line)] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
            {SITE.operatedByLabel} offers
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-3xl">
            A single, convenient platform to explore high-speed Internet, Cable TV, Home Phone, Wireless, and Home
            Security options—featuring availability checks, upfront pricing guidance, and easy installation coordination
            as an independent, authorized retailer and licensed reseller for several leading U.S. telecom and home
            service providers.
          </p>
        </div>
      </section>

      <section className="py-20 soft-grid border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-ink mb-3">What you can compare</h2>
          <p className="text-muted mb-10 max-w-2xl">
            Tell us how you use the internet at home — we’ll help you weigh speed, price, and fit without pushing a
            single carrier.
          </p>
          <div className="grid sm:grid-cols-2 gap-0 border border-[var(--line)]">
            {categories.map((item) => (
              <div key={item.title} className="p-6 border-[var(--line)] sm:odd:border-r border-b last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                <h3 className="font-display text-xl font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={openLiveChat}
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#0c1c24] bg-mint hover:brightness-110 transition"
            >
              Live Chat to compare
            </button>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 font-semibold text-teal border border-teal/40 hover:bg-teal/5 transition">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-[var(--line)] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-ink mb-3">Bundle & save: internet + TV</h2>
          <p className="text-muted mb-10 max-w-2xl">
            Combining internet and TV through one provider can mean simpler billing and better value. Compare bundle
            styles below, then call or chat to see exact pricing for your address.
          </p>
          <div className="grid md:grid-cols-3 gap-0 border border-[var(--line)] bg-white">
            {bundles.map((b) => (
              <div
                key={b.title}
                className={`p-7 border-[var(--line)] md:border-r last:md:border-r-0 ${
                  b.featured ? 'bg-[#0c1c24] text-white' : ''
                }`}
              >
                <p className={`text-xs uppercase tracking-wider mb-2 ${b.featured ? 'text-mint' : 'text-teal'}`}>
                  {b.label}
                </p>
                <h3 className={`font-display text-xl font-bold mb-4 ${b.featured ? 'text-white' : 'text-ink'}`}>
                  {b.title}
                </h3>
                <ul className={`space-y-2 text-sm mb-6 ${b.featured ? 'text-[#c5dde0]' : 'text-muted'}`}>
                  {b.points.map((pt) => (
                    <li key={pt}>• {pt}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={openLiveChat}
                  className={`inline-flex text-sm font-semibold ${
                    b.featured ? 'text-mint hover:underline' : 'text-teal hover:underline'
                  }`}
                >
                  Live Chat to compare
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-[var(--line)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-ink mb-8">Ask us anything</h2>
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    className="w-full text-left py-5 flex justify-between gap-4"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="font-semibold text-ink">{faq.q}</span>
                    <span className="text-teal text-xl">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && <p className="pb-5 text-muted leading-relaxed text-[15px]">{faq.a}</p>}
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={openLiveChat}
              className="inline-flex px-7 py-3.5 font-bold text-[#0c1c24] bg-mint hover:brightness-110 transition"
            >
              Live Chat
            </button>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex px-7 py-3.5 font-bold text-white bg-teal hover:bg-[var(--teal-deep)] transition"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
