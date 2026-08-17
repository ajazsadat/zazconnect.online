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
  footerDisclaimer: [
    "zazconnect.online is operated by Maverick Wells Inc, an independent authorized sales partner and reseller that helps consumers discover, compare, and activate internet, TV, phone, and wireless service options available in the United States.",
    "Maverick Wells Inc does not own, operate, install, or directly provide telecommunications, internet, cable TV, or wireless services. All services featured on this website are offered, installed, billed, and supported exclusively by their respective third-party service providers. We are not owned, operated, or controlled by any internet service provider (ISP) or carrier.",
    "Our role is limited to providing informational resources and connecting interested consumers with available service providers. Decisions regarding service availability, pricing, installation, billing, technical support, and account management are made solely by the applicable telecommunications provider.",
  ],
  legalLinks: [
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Reseller Disclosure", href: "/reseller-disclosure" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Fees & Disclosures", href: "/fees-disclosures" },
  ],
};

export const PROVIDERS = [
  { name: "Xfinity", href: "/xfinity-plans", blurb: "Flexible cable & fiber-powered options" },
  { name: "Spectrum", href: "/spectrum-plans", blurb: "Wide coverage with simple plan tiers" },
  // Temporarily disabled — restore when AT&T Fiber page is needed again
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
