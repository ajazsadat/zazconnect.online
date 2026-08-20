/** Providers we hold an authorized dealer agreement with. Everything else falls back to independent-resource wording. */
export const AUTHORIZED_DEALER_PROVIDERS = ["Xfinity", "AT&T"];

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
  spectrumHeaderDisclaimer:
    "Why Choose ZazConnect? We help you compare top internet and TV plans from leading and trusted providers available in your area. ZazConnect is an independent resource. We do not sell or manage Spectrum accounts; all information is for guidance only.",
  xfinityHeaderDisclaimer:
    "Why Choose ZazConnect? We help you compare top internet and TV plans from leading and trusted providers available in your area. ZazConnect is an authorized Xfinity dealer. However, ZazConnect does not provide Xfinity customer service or manage Xfinity accounts. All service-related support is handled directly by Xfinity.",
  attHeaderDisclaimer:
    "Why Choose ZazConnect? We help you compare top internet and TV plans from leading and trusted providers available in your area. ZazConnect is an authorized AT&T dealer. However, ZazConnect does not provide AT&T customer service or manage AT&T accounts. All service-related support is handled directly by AT&T.",
  carrierDisclaimer:
    "We are not owned, operated, or controlled by any internet service provider (ISP) or carrier.",
  providerIndependentDisclaimer(providerName) {
    return `${this.brandFull} is an independent resource. We do not sell or manage ${providerName} accounts; all information is for guidance only.`;
  },
  providerDealerDisclaimer(providerName) {
    return `${this.brandFull} is an authorized ${providerName} dealer. However, ${this.brandFull} does not provide ${providerName} customer service or manage ${providerName} accounts. All service-related support is handled directly by ${providerName}.`;
  },
  providerStatusDisclaimer(providerName) {
    return AUTHORIZED_DEALER_PROVIDERS.includes(providerName)
      ? this.providerDealerDisclaimer(providerName)
      : this.providerIndependentDisclaimer(providerName);
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
    { name: "Reseller Disclosure", href: "/reseller-disclosure" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Fees & Disclosures", href: "/fees-disclosures" },
  ],
};

/** Provider pages are disabled for now — see src/app/*-plans/page.js.disabled */
export const PROVIDERS = [
  // { name: "Xfinity", href: "/xfinity-plans", blurb: "Flexible cable & fiber-powered options" },
  // { name: "Spectrum", href: "/spectrum-plans", blurb: "Wide coverage with simple plan tiers" },
  // { name: "AT&T Fiber", href: "/att-plans", blurb: "Fiber speeds where the network reaches" },
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
