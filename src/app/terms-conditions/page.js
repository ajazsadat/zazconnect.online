import { SITE } from '@/lib/site';

export const metadata = {
  title: `Terms & Conditions | ${SITE.brandFull}`,
  description: `Terms and conditions for ${SITE.domain} operated by ${SITE.legalName}.`,
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold text-ink mb-8">Terms & Conditions</h1>
        <div className="space-y-6 text-muted leading-relaxed text-[15px]">
          <p>
            By using {SITE.domain}, you agree to these terms. {SITE.brandFull} is operated by {SITE.legalName}, an
            independent comparison and referral platform. We are not an internet, cable, wireless, or home security
            service provider and do not own or operate telecommunications network infrastructure.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Our role</h2>
          <p>
            We help you explore and compare plans from third-party providers. Service agreements, installation, billing,
            and customer support are handled by the provider you select under that provider&apos;s terms. Pricing and
            availability vary by location and may change without notice.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">No guarantee of service</h2>
          <p>
            We do not guarantee that any plan will be available at your address or that promotional pricing will apply.
            Final eligibility is determined by the provider.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Trademarks</h2>
          <p>
            Provider names and logos are trademarks of their respective owners and are used for identification and
            comparison only. Use of these marks does not imply affiliation or endorsement.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Contact</h2>
          <p>
            {SITE.email} · {SITE.phoneDisplay} · {SITE.addressLine1}, {SITE.addressLine2}
          </p>
        </div>
      </article>
    </div>
  );
}
