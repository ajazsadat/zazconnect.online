import { SITE } from '@/lib/site';
import ContactForm from '@/components/ContactForm';

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
              Want to learn more about {SITE.brandFull}? Fill out the form or call us — our team will walk you through
              options for your address.
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
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-10 inline-flex items-center justify-center px-6 py-3.5 font-bold text-white bg-teal hover:bg-[var(--teal-deep)] transition"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>

          <div className="border border-[var(--line)] bg-white p-6 md:p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-ink mb-2">Contact Us</h2>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              Share a few details and we&apos;ll help you compare options available near you.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
