import Link from 'next/link';
import { SITE } from '@/lib/site';
import LegalArticle from '@/components/LegalArticle';

export const metadata = {
  title: `Fees & Disclosures | ${SITE.brandFull}`,
  description: `Fees and disclosures for ${SITE.domain}, operated by ${SITE.legalName}.`,
};

export default function FeesDisclosuresPage() {
  return (
    <LegalArticle title="Fees & Disclosures">
      <p>
        {SITE.operatedByLabel} does not charge customers any additional fees for consulting, comparison, or connection
        assistance. Any applicable installation, activation, or equipment fees are determined and charged directly by the
        service provider, not by {SITE.legalName}.
      </p>
      <p>
        We may receive a one-time or recurring commission from our partner providers for successful activations or
        continued customer relationships. These payments are part of standard industry partnerships and do not influence
        our recommendations — our goal is to help customers compare options and match with a suitable service for their
        needs and location.
      </p>
      <p>
        All offers, pricing, and promotions are subject to provider terms and availability. Taxes, surcharges, early
        termination fees, and equipment charges may apply and are the responsibility of the customer under their
        agreement with the provider.
      </p>
      <p>
        {SITE.carrierDisclaimer} For related information, see our{' '}
        <Link href="/reseller-disclosure" className="text-teal hover:underline">
          Reseller Disclosure
        </Link>{' '}
        and{' '}
        <Link href="/terms-conditions" className="text-teal hover:underline">
          Terms & Conditions
        </Link>
        .
      </p>
      <p>
        Questions: {SITE.email} · {SITE.phoneDisplay} · {SITE.addressLine1}, {SITE.addressLine2}
      </p>
    </LegalArticle>
  );
}
