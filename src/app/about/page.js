import { SITE } from '@/lib/site';

export const metadata = {
  title: `About Us | ${SITE.brandFull}`,
  description: `Learn how ${SITE.legalName} operates ${SITE.brandFull} as an independent, authorized reseller.`,
};

export default function AboutPage() {
  const steps = [
    'General informational assistance for comparing options from participating providers.',
    'Help checking service availability by address.',
    'Upon request, help connect you with the provider you choose so you can complete enrollment.',
    'Share clear, side-by-side plan information so you can decide without being tied to a single carrier.',
  ];

  return (
    <div>
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0 hero-mesh opacity-90" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            About {SITE.brandFull}
          </h1>
          <p className="mt-5 text-lg text-[#c5dde0] max-w-2xl leading-relaxed">
            Your destination for high-speed home connectivity comparisons — clearer options, fewer surprises.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <div>
          <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Who we are</p>
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Independent by design</h2>
          <p className="text-muted leading-relaxed">
            {SITE.operatedByLabel} is an independent, authorized reseller. Our role is limited to
            informational support, helping customers compare available internet and bundled options, and assisting with
            enrollment by connecting you with the provider you choose.
          </p>
          <p className="text-muted leading-relaxed mt-4">
            Network performance, installation, billing, account management, and ongoing support are provided and managed
            directly by the selected service providers and are subject to their terms and availability.
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-teal text-sm font-semibold uppercase tracking-wider">How we help</p>
          {steps.map((step, i) => (
            <div key={step} className="flex gap-5 items-start">
              <span className="font-display text-3xl font-bold text-teal/40 leading-none w-10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[#2a4550] leading-relaxed pt-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-[var(--line)] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink mb-4">How we operate</h2>
          <p className="text-muted leading-relaxed">
            {SITE.legalName} (operating as {SITE.domain}) helps customers nationwide explore broadband, wireless, and
            digital service options. We are not owned or controlled by any specific ISP. Services are provided, billed,
            and maintained by the respective carriers. We may receive a commission for connections — at no extra cost to
            you.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex mt-8 px-7 py-3.5 font-semibold text-white bg-teal hover:bg-[var(--teal-deep)] transition"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
