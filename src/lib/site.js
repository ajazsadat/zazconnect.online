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
    "Why Choose ZazConnect? We help you compare top internet and TV plans from leading and trusted providers available in your area. ZazConnect is an independent resource. We do not sell or manage Xfinity accounts; all information is for guidance only.",
  attHeaderDisclaimer:
    "Why Choose ZazConnect? We help you compare top internet and TV plans from leading and trusted providers available in your area. ZazConnect is an independent resource. We do not sell or manage AT&T accounts; all information is for guidance only.",
  carrierDisclaimer:
    "We are not affiliated with Spectrum, Xfinity, AT&T, Verizon, Frontier, Windstream, Brightspeed, or any other carrier.",
  providerIndependentDisclaimer(providerName) {
    return `${this.brandFull} is an independent resource. We do not sell or manage ${providerName} accounts; all information is for guidance only.`;
  },
  footerDisclaimer: [
    "zazconnect.online is operated by Maverick Wells Inc, an independent comparison and referral company that helps consumers discover and compare internet, TV, phone, and wireless service options available in the United States.",
    "Maverick Wells Inc does not own, operate, install, or directly provide telecommunications, internet, cable TV, or wireless services. All services featured on this website are offered, installed, billed, and supported exclusively by their respective third-party service providers. We are not affiliated with Spectrum, Xfinity, AT&T, Verizon, Frontier, Windstream, Brightspeed, or any other carrier.",
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
