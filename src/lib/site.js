export const SITE = {
  brand: "ZazConnect",
  brandFull: "ZazConnect",
  legalName: "Maverick Well INC",
  domain: "zazconnect.online",
  phoneDisplay: "(855) 221-7728",
  phoneTel: "(855) 221-7728",
  email: "info@zazconnect.online",
  addressLine1: "6340 N Eldridge Pkwy Ste N 117",
  addressLine2: "Houston, TX 77041",
  topDisclaimer:
    "Reseller & Compliance Disclosure: ZazConnect (operated by Maverick Well INC) is an independent comparison and referral platform. We are not an internet, cable, wireless, or home security service provider ourselves, and we do not own or operate any telecommunications network infrastructure. We help connect you with licensed third-party providers. All service agreements, installation, billing, and customer support are provided directly by the selected provider under that provider’s own terms. Pricing, availability, and promotions are determined by each provider, may vary by location, and are subject to change without notice.",
  footerDisclaimer: [
    "zazconnect.online is operated by Maverick Well INC, an independent comparison and referral company that helps consumers discover and compare internet, TV, phone, and wireless service options available in the United States.",
    "Maverick Well INC does not own, operate, install, or directly provide telecommunications, internet, cable TV, or wireless services. All services featured on this website are offered, installed, billed, and supported exclusively by their respective third-party service providers.",
    "Our role is limited to providing informational resources and connecting interested consumers with available service providers. Decisions regarding service availability, pricing, installation, billing, technical support, and account management are made solely by the applicable telecommunications provider.",
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
