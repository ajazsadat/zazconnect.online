import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Privacy Policy | ${SITE.brandFull}`,
  description: `Privacy policy for ${SITE.domain} operated by ${SITE.legalName}.`,
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold text-ink mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted leading-relaxed text-[15px]">
          <h2 className="font-display text-xl font-bold text-ink">What This Policy Covers</h2>
          <p>
            {`${SITE.brandFull} ("we," "us," "our"), operated by ${SITE.legalName}, manages this website and associated promotional brands. This Privacy Policy describes how we collect, use, and share information when you visit our website or contact us.`}
          </p>
          <p>
            {`${SITE.referralDisclosure} We do not provide internet, TV, or phone services directly, and we are not owned, operated, or controlled by any internet service provider (ISP) or carrier.`}
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Information we collect</h2>
          <p>
            We may collect information you provide directly (such as name, phone number, email, or ZIP code) when you
            call us or request comparison assistance. We may also collect standard technical data such as IP address,
            browser type, and pages visited through cookies or similar technologies.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">How we use information</h2>
          <p>
            We use information to respond to inquiries, help compare and enroll in services offered by participating
            providers, improve our website, and comply with legal obligations. We may share relevant information with
            participating providers or enrollment partners to facilitate signup when you request it.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Sharing your information</h2>
          <p>
            We do not sell your personal information. We may share the details you provide with participating
            providers and their referral partners for the sole purpose of checking availability,
            preparing a quote, and completing enrollment when you ask us to. Those partners are required to handle your
            information in line with applicable data protection laws and to use it only for the service you requested.
          </p>
          <p>
            We may also share information with vendors that support our website, phone, and messaging systems, and
            where disclosure is required by law or needed to protect our legal rights.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Calls and texts</h2>
          <p>
            If you contact us by phone or provide a number, you may receive calls or texts related to your inquiry from{' '}
            {SITE.domain} / {SITE.legalName}. Consent is not a condition of purchase. Message and data rates may apply.
            You can opt out of marketing messages at any time by replying STOP or contacting us directly.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Cookies and tracking</h2>
          <p>
            We use cookies and similar technologies to keep the site working, measure performance, and support
            advertising. You can control these through your browser settings. See our{' '}
            <Link href="/cookie-policy" className="text-teal hover:underline">
              Cookie Policy
            </Link>{' '}
            for detail on the categories we use and how to manage them.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Data security</h2>
          <p>
            We apply reasonable technical and organizational safeguards to protect personal information against
            unauthorized access, misuse, alteration, or disclosure. No method of transmission or storage is completely
            secure, so we cannot guarantee absolute security.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Your rights</h2>
          <p>
            Depending on where you live, you may have the right to request access to the personal information we hold
            about you, ask us to correct or delete it, or opt out of marketing communications. To make a request, email{' '}
            {SITE.email} or call {SITE.phoneDisplay}. We may need to verify your identity before we can act on a
            request.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Retention</h2>
          <p>
            We keep inquiry records only as long as needed to respond to your request, meet the obligations of the
            provider you enrolled with, and satisfy legal, tax, or record-keeping requirements.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised
            effective date. Continued use of the website after an update means you accept the revised policy.
          </p>
          <h2 className="font-display text-xl font-bold text-ink pt-4">Contact</h2>
          <p>
            Questions about this policy: {SITE.email} or {SITE.phoneDisplay}. Office: {SITE.addressLine1},{' '}
            {SITE.addressLine2}.
          </p>
        </div>
      </article>
    </div>
  );
}
