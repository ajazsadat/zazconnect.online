import Link from 'next/link';
import { SITE } from '@/lib/site';
import LegalArticle from '@/components/LegalArticle';

export const metadata = {
  title: `Reseller Disclosure | ${SITE.brandFull}`,
  description: `Reseller and partnership disclosure for ${SITE.domain}, operated by ${SITE.legalName}.`,
};

export default function ResellerDisclosurePage() {
  return (
    <LegalArticle title="Reseller Disclosure">
      <p>
        {SITE.operatedByLabel} is an independent comparison and referral platform that helps customers compare,
        select, and connect with broadband, wireless, and digital service options across the United States.
      </p>
      <p>
        We are not owned, operated, or controlled by any internet service provider (ISP) or carrier. All broadband and
        wireless services are delivered, billed, and supported directly by the respective licensed providers.
      </p>
      <p>
        {SITE.legalName} may receive a commission or referral incentive from these providers when a customer activates
        or purchases a qualifying service through our platform or sales team. These commissions do not affect pricing —
        the customer pays the same rates offered directly by the provider.
      </p>
      <p>
        All service information, including pricing, availability, and terms, is based on data provided by each carrier.
        We do not guarantee availability or pricing accuracy in all areas, and customers are encouraged to confirm final
        details with their chosen provider prior to activation.
      </p>
      <p>
        {SITE.carrierDisclaimer} Provider names and trademarks belong to their respective owners and are used for
        identification and comparison only.
      </p>
      <p>
        Questions:{' '}
        <a href={`mailto:${SITE.email}`} className="text-teal hover:underline">
          {SITE.email}
        </a>{' '}
        ·{' '}
        <a href={`tel:${SITE.phoneTel}`} className="text-teal hover:underline">
          {SITE.phoneDisplay}
        </a>
        . See also our{' '}
        <Link href="/fees-disclosures" className="text-teal hover:underline">
          Fees & Disclosures
        </Link>{' '}
        and{' '}
        <Link href="/terms-conditions" className="text-teal hover:underline">
          Terms & Conditions
        </Link>
        .
      </p>
    </LegalArticle>
  );
}
