export const SITE = {
  brand: "ZazConnect",
  brandFull: "ZazConnect",
  legalName: "Jari & Kinza Corporation",
  domain: "zazconnect.online",
  phoneDisplay: "(855) 221-7728",
  phoneTel: "(855) 221-7728",
  email: "info@zazconnect.online",
  addressLine1: "6340 N Eldridge Pkwy Ste N 117",
  addressLine2: "Houston, TX 77041",
  topDisclaimer:
    "Jari & Kinza Corporation, operating zazconnect.online — helps you compare top internet and TV plans from leading and trusted providers available in your area.",
  spectrumHeaderDisclaimer:
    "ZazConnect is an independent comparison platform — not Spectrum, Charter, or any other carrier. We do not provide customer service for these carriers. For existing customer support, please contact your provider directly.",
  xfinityHeaderDisclaimer:
    "ZazConnect is an independent comparison platform — not Xfinity, Comcast, or any other carrier. We do not provide customer service for these carriers. For existing customer support, please contact your provider directly.",
  carrierDisclaimer:
    "We are not affiliated with Spectrum, Xfinity, AT&T, Verizon, Frontier, Windstream, Brightspeed, or any other carrier.",
  footerDisclaimer: [
    "zazconnect.online is operated by Jari & Kinza Corporation, an independent comparison and referral company that helps consumers discover and compare internet, TV, phone, and wireless service options available in the United States.",
    "Jari & Kinza Corporation does not own, operate, install, or directly provide telecommunications, internet, cable TV, or wireless services. All services featured on this website are offered, installed, billed, and supported exclusively by their respective third-party service providers. We are not affiliated with Spectrum, Xfinity, AT&T, Verizon, Frontier, Windstream, Brightspeed, or any other carrier.",
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
