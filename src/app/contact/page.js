import { SITE } from '@/lib/site';

export const metadata = {
  title: `Contact Us | ${SITE.brandFull}`,
  description: `Contact ${SITE.legalName} / ${SITE.brandFull} for internet and TV plan comparison help.`,
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-[var(--line)] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-ink tracking-tight mb-4">
              Get in touch with {SITE.legalName}
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Want to learn more about {SITE.brandFull}? Call or email and our team will walk you through options for
              your address.
            </p>
            <dl className="space-y-8">
              <div>
                <dt className="text-xs uppercase tracking-wider text-teal font-semibold mb-1">Phone</dt>
                <dd>
                  <a href={`tel:${SITE.phoneTel}`} className="font-display text-2xl font-bold text-ink hover:text-teal">
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-teal font-semibold mb-1">Email</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`} className="text-xl text-ink hover:text-teal">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-teal font-semibold mb-1">Office</dt>
                <dd className="text-muted leading-relaxed">
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-[#0c1c24] text-white p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold mb-3">Prefer to talk now?</h2>
            <p className="text-[#c5dde0] text-sm leading-relaxed mb-8">
              By providing your phone number when you call, you may receive texts or calls from {SITE.domain}. Consent is
              not a condition of purchase. See our{' '}
              <a href="/terms-conditions" className="text-mint hover:underline">
                Terms
              </a>{' '}
              and{' '}
              <a href="/privacy-policy" className="text-mint hover:underline">
                Privacy Policy
              </a>
              .
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex w-full items-center justify-center px-6 py-4 font-bold text-[#0c1c24] bg-mint hover:brightness-110 transition"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
