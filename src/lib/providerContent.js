import { SITE } from '@/lib/site';

export function spectrumFaqs() {
  return [
    {
      q: 'Are you an official Spectrum reseller?',
      a: `No. ${SITE.brandFull} is not an authorized Spectrum reseller and does not sell Spectrum packages directly. We’re an independent comparison and referral service — our role is to help you explore options and understand what may be available in your area.`,
    },
    {
      q: 'How can I contact Spectrum customer support?',
      a: `We’re not able to provide Spectrum account support directly. For billing, technical support, or service issues, contact Spectrum through their official channels — listed on Spectrum’s website or your Spectrum bill. We can still help you compare plans and check general availability by address.`,
    },
    {
      q: `What makes ${SITE.brandFull} different?`,
      a: `We’re an independent comparison platform. We look across multiple providers — including Spectrum — based on coverage, plan types, and overall fit for your household, instead of pushing a single carrier.`,
    },
    {
      q: 'Can you help me compare providers in my area?',
      a: `Yes. Our team can walk you through internet, TV, and phone options that may be available near you, including Spectrum and other major providers. Call ${SITE.phoneDisplay} and we’ll help you compare what’s realistic for your address.`,
    },
    {
      q: 'Do you provide pricing or promotions for Spectrum?',
      a: 'We don’t sell Spectrum service or publish official Spectrum pricing. Any starting prices or promotions mentioned on this site are for general reference only and can change by location and offer period.',
    },
  ];
}

export function attFaqs() {
  return [
    {
      q: 'How much does AT&T Internet cost?',
      a: 'AT&T Fiber and wireless home internet pricing depends on the speed tier and your address. Fiber plans often start in a promotional range for mid-tier speeds in eligible areas. Taxes, fees, and installation charges can be extra — confirm the final quote for your location before you enroll.',
    },
    {
      q: 'How can I contact AT&T customer service?',
      a: `We’re not able to provide AT&T account support directly. Use AT&T’s official channels — phone, online chat, or a local store. Current contact details are on AT&T’s website or your AT&T bill. We can still help you compare plans by address.`,
    },
    {
      q: 'Does AT&T own DIRECTV?',
      a: 'DIRECTV operates as a separate TV and streaming brand that has historically been linked with AT&T. Bundle options can change over time. If you want internet plus TV, we can help you compare what’s available at your address.',
    },
    {
      q: 'What is AT&T Fiber?',
      a: 'AT&T Fiber uses fiber-optic technology where the network is built out. Speed tiers commonly range from entry-level fiber plans up through multi-gig options in select markets. We’ll help you check whether fiber is offered at your address.',
    },
    {
      q: 'How can I save on AT&T services?',
      a: 'Many AT&T offers include discounts for AutoPay and paperless billing. Additional savings may be available through wireless + internet bundles, depending on eligibility. Final savings are confirmed by AT&T when you order.',
    },
  ];
}

export function xfinityFaqs() {
  return [
    {
      q: 'What is Xfinity Internet?',
      a: 'Xfinity provides internet, TV, phone, mobile, and home security options across many U.S. markets. Plan types, speeds, and pricing vary by location. Our team can help you understand which options may be available near you.',
    },
    {
      q: 'Is Xfinity different from Comcast?',
      a: 'Comcast uses Xfinity as its consumer brand for services such as internet, TV, mobile, and home security. When people say “Xfinity” or “Comcast” for home internet, they’re usually referring to the same provider family.',
    },
    {
      q: 'How do I sign up for Xfinity?',
      a: `You can start online, through Xfinity’s own tools, or with help from our team. Call ${SITE.phoneDisplay} and we’ll walk you through comparing plans and checking availability. Signup and installation are completed with Xfinity — not managed as an account by ${SITE.brandFull}.`,
    },
    {
      q: 'Are there any Xfinity deals for new customers?',
      a: 'Xfinity periodically runs promotions on internet, TV, and bundles. Offers change by market and may require AutoPay or other terms. Confirm eligibility and final pricing directly with Xfinity.',
    },
    {
      q: 'Can I combine Xfinity services in a bundle?',
      a: 'Yes. Internet can often be combined with TV, phone, and/or mobile, which may simplify billing and unlock package pricing. Bundle mix depends on what’s offered at your address.',
    },
    {
      q: `What does ${SITE.brandFull} do for Xfinity comparisons?`,
      a: `We help you compare plans, review features and typical pricing ranges, and check what may be available at your address. ${SITE.brandFull} is an authorized Xfinity dealer, but we don’t provide Xfinity customer service or manage Xfinity accounts after activation — that’s handled directly by Xfinity.`,
    },
    {
      q: 'Do Xfinity plans include equipment and apps?',
      a: 'Many Xfinity plans include or rent gateway/modem equipment, and TV packages may include set-top boxes or streaming apps depending on the offer. Exact inclusions vary by plan and location.',
    },
    {
      q: 'What if I move or need to change my plan?',
      a: `${SITE.brandFull} can help you understand the general process and compare options at a new address; for account transfers, billing changes, or technical moves, you’ll work directly with Xfinity.`,
    },
  ];
}

export function providerFaqs(name) {
  const key = String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9&]/g, '');

  if (key.includes('spectrum')) return spectrumFaqs();
  if (key.includes('att') || key.includes('at&t')) return attFaqs();
  if (key.includes('xfinity') || key.includes('comcast')) return xfinityFaqs();
  return [];
}

export function providerContentSections(name) {
  return [
    {
      title: 'Built for everyday household use',
      body: `Speeds and features vary by address. Compare ${name} options for streaming, remote work, and multi-device homes — then confirm availability before you enroll.`,
    },
    {
      title: `What to know about ${name}`,
      body: `${SITE.brandFull} helps you review ${name} plan types side by side with other providers. Network performance, installation, and billing remain with ${name}.`,
    },
    {
      title: 'Compare before you commit',
      body: `We’ll walk through typical pricing ranges, promo windows, and equipment notes so you understand the full picture — then you complete signup directly with the provider.`,
    },
  ];
}
