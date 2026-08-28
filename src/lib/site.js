export const SITE = {
  brand: "ZazConnect",
  brandFull: "ZazConnect",
  legalName: "Maverick Wells Inc",
  domain: "zazconnect.online",
  phoneDisplay: "(855) 221-7728",
  phoneTel: "(855) 221-7728",
  email: "info@zazconnect.online",
  addressLine1: "6340 N Eldridge Pkwy Ste N 117",
  addressLine2: "Houston, TX 77041",
  /** Parallel to reference “LegalEntity (d/b/a domain)” — we use operated by instead. */
  get operatedByLabel() {
    return `${this.brandFull} (operated by ${this.legalName})`;
  },
  topDisclaimer:
    "ZazConnect (operated by Maverick Wells Inc) — helps you compare top internet and TV plans from leading and trusted providers available in your area.",
  whyChooseIntro:
    "We help you compare top internet and TV plans from leading and trusted providers available in your area.",
  carrierDisclaimer:
    "We are not owned, operated, or controlled by any internet service provider (ISP) or carrier.",
  /**
   * Google Ads misrepresentation policy: provider pages may never claim reseller or
   * dealer status, and must state that account support stays with the carrier.
   */
  providerStatusDisclaimer(providerName) {
    return `${this.brandFull} is an independent comparison service. ${this.brandFull} does not provide ${providerName} customer service or manage accounts. All service support is handled directly by ${providerName}.`;
  },
  providerPlanDetailsNote(providerName) {
    return `Plan details, pricing, speeds, and features are based on publicly available ${providerName} information and are subject to change. Speeds shown are maximum wired download speeds and are not guaranteed; actual speeds vary by address, equipment, and network conditions. ${providerName} and related marks are trademarks of their respective owners and are used for identification and comparison only.`;
  },
  providerHeaderDisclaimer(providerName) {
    return `Why Choose ${this.brandFull}? ${this.whyChooseIntro} ${this.providerStatusDisclaimer(providerName)}`;
  },
  get referralDisclosure() {
    return `${this.operatedByLabel} is an independent comparison and referral service.`;
  },
  get comparisonPlatformDisclosure() {
    return `${this.operatedByLabel} is an independent comparison platform.`;
  },
  get comparePageDisclosure() {
    return `${this.referralDisclosure} We compare internet and TV plans available in your area. We do not sell or manage carrier accounts directly. ${this.carrierDisclaimer} For billing or existing account support, please contact your provider directly.`;
  },
  get connectPageDisclosure() {
    return `${this.referralDisclosure} We do not own or operate any internet network and do not provide carrier account support. For billing, outages, or technical issues with an existing service, contact your provider through their official channels.`;
  },
  beforeFooterDisclaimer:
    "Maverick Wells Inc operates as an independent comparison platform that helps users explore and evaluate Internet and TV plans from multiple trusted providers. We do not directly sell, install, or manage any Internet or TV services.",
  footerOfferDisclosures: [
    {
      title: "Offer & Pricing Details",
      body: "Promotional pricing may apply for a limited time and is subject to change. After the promotional period, standard rates may apply. Discounts may begin within the first few billing cycles.",
    },
    {
      title: "Eligibility",
      body: "Offers may be available to new residential customers only and may not be available in all areas. Certain multi-dwelling units may not qualify.",
    },
    {
      title: "AutoPay & Paperless Billing",
      body: "Monthly discounts may apply when enrolled in AutoPay and paperless billing. Discount amounts may vary depending on payment method.",
    },
    {
      title: "Fees & Taxes",
      body: "Installation fees, equipment charges, and applicable taxes may apply. Pricing excludes taxes and surcharges unless otherwise stated.",
    },
    {
      title: "Speeds & Performance",
      body: "Internet speeds are based on wired connections. Actual speeds may vary depending on network conditions, equipment, and other factors.",
    },
    {
      title: "General Terms",
      body: "Offers are subject to change or discontinuation without notice. Additional terms and conditions may apply.",
    },
  ],
  legalLinks: [
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Comparison & Referral Disclosure", href: "/comparison-disclosure" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Fees & Disclosures", href: "/fees-disclosures" },
  ],
};

export const PROVIDERS = [
  { name: "Xfinity", href: "/xfinity-plans", blurb: "Flexible cable & fiber-powered options" },
  { name: "Spectrum", href: "/spectrum-plans", blurb: "Wide coverage with simple plan tiers" },
  { name: "AT&T Fiber", href: "/att-plans", blurb: "Fiber speeds where the network reaches" },
];

export function openLiveChat() {
  if (typeof window === "undefined") return;
  const api = window.Tawk_API;
  if (api && typeof api.maximize === "function") {
    api.maximize();
    return;
  }
  window.Tawk_API = window.Tawk_API || {};
  const previousOnLoad = window.Tawk_API.onLoad;
  window.Tawk_API.onLoad = function () {
    if (typeof previousOnLoad === "function") previousOnLoad();
    window.Tawk_API.maximize();
  };
}
