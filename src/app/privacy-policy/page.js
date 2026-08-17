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
            {`${SITE.brandFull} is an independent, authorized reseller. We do not provide internet, TV, or phone services directly, and we are not owned, operated, or controlled by any internet service provider (ISP) or carrier.`}
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
          <h2 className="font-display text-xl font-bold text-ink pt-4">Calls and texts</h2>
          <p>
            If you contact us by phone or provide a number, you may receive calls or texts related to your inquiry from{' '}
            {SITE.domain} / {SITE.legalName}. Consent is not a condition of purchase. Message and data rates may apply.
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
