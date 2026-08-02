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
            {`Welcome to ${SITE.domain}, operated by ${SITE.legalName}. By accessing or using our website and services, you agree to these Terms of Service.`}
          </p>
          <p>
            {`${SITE.brandFull} ("we," "us," "our") is an independent comparison and referral platform. We are not an internet, cable, wireless, or home security service provider, and we are not affiliated with Spectrum, Xfinity, AT&T, Verizon, Frontier, Windstream, Brightspeed, or any other carrier.`}
          </p>

          <h2 className="font-display text-xl font-bold text-ink pt-4">Acceptance of Terms</h2>
          <p>
            By using {SITE.domain}, you confirm that you have read, understood, and agree to be bound by these Terms. If
            you do not agree, please do not use this website.
          </p>

          <h2 className="font-display text-xl font-bold text-ink pt-4">Services Description</h2>
          <p>
            We help you explore and compare internet, TV, phone, and related plan options from third-party providers.
            All actual service provision, pricing, promotions, billing, installation, and customer support are handled
            directly by the underlying service providers under their own terms. We do not own or operate
            telecommunications network infrastructure.
          </p>

          <h2 className="font-display text-xl font-bold text-ink pt-4">Your Responsibilities</h2>
          <p>
            You agree to provide accurate information when contacting us, use this website only for lawful purposes, and
            understand that final eligibility, pricing, and availability are determined by the provider you select.
          </p>

          <h2 className="font-display text-xl font-bold text-ink pt-4">No Guarantee of Service</h2>
          <p>
            We do not guarantee that any plan will be available at your address or that promotional pricing will apply.
            Final eligibility is determined by the provider.
          </p>

          <h2 className="font-display text-xl font-bold text-ink pt-4">Intellectual Property</h2>
          <p>
            Content on this website — including text, branding, and layout — is owned by {SITE.legalName} or used under
            license. Provider names and logos are trademarks of their respective owners and are used for identification
            and comparison only. Use of these marks does not imply affiliation or endorsement.
          </p>

          <h2 className="font-display text-xl font-bold text-ink pt-4">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE.legalName} is not liable for decisions you make based on
            comparisons shown on this site, provider service outages, billing disputes, installation delays, or other
            issues arising from services provided by third-party carriers.
          </p>

          <h2 className="font-display text-xl font-bold text-ink pt-4">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless {SITE.legalName} and {SITE.brandFull} from claims arising from your
            misuse of this website, your violation of these Terms, or your relationship with any third-party service
            provider.
          </p>

          <h2 className="font-display text-xl font-bold text-ink pt-4">Modification of Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the website after changes are posted
            constitutes acceptance of the updated Terms.
          </p>

          <h2 className="font-display text-xl font-bold text-ink pt-4">Governing Law</h2>
          <p>
            {`These Terms are governed by the laws of the United States and the state in which ${SITE.legalName} is registered, without regard to conflict-of-law principles.`}
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
