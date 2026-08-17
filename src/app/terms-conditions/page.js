import Link from 'next/link';
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
            {`${SITE.operatedByLabel} ("we," "us," "our") is a certified third-party reseller connecting customers with licensed telecommunications and technology service providers across the United States. We do not own or operate any internet, cable, wireless, or communication networks, and we are not owned, operated, or controlled by any internet service provider (ISP) or carrier.`}
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

          <h2 className="font-display text-xl font-bold text-ink pt-4">Payments & Commissions</h2>
          <p>
            We do not charge you for consultation or comparison assistance. We may earn a commission or referral fee
            from a provider when you activate service through us. This does not change the price you pay or influence
            which options we show you. Full detail is set out in our{' '}
            <Link href="/reseller-disclosure" className="text-teal hover:underline">
              Reseller Disclosure
            </Link>{' '}
            and{' '}
            <Link href="/fees-disclosures" className="text-teal hover:underline">
              Fees &amp; Disclosures
            </Link>
            .
          </p>

          <h2 className="font-display text-xl font-bold text-ink pt-4">Privacy & Data Use</h2>
          <p>
            We collect only the information needed to respond to your request and connect you with a provider, and we
            do not sell your personal information. Details you submit may be shared with the provider you select in
            order to check availability and complete enrollment. How we collect, use, share, and retain that
            information is described in our{' '}
            <Link href="/privacy-policy" className="text-teal hover:underline">
              Privacy Policy
            </Link>
            .
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
