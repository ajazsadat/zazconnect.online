import Link from 'next/link';
import { SITE } from '@/lib/site';
import LegalArticle from '@/components/LegalArticle';

export const metadata = {
  title: `Cookie Policy | ${SITE.brandFull}`,
  description: `Cookie policy for ${SITE.domain}, operated by ${SITE.legalName}.`,
};

export default function CookiePolicyPage() {
  return (
    <LegalArticle title="Cookie Policy">
      <p>
        Our website uses cookies and similar technologies to enhance your browsing experience, analyze traffic, and
        improve our marketing efforts. Cookies are small text files stored on your device that help us remember your
        preferences and understand how visitors interact with our site.
      </p>

      <h2 className="font-display text-xl font-bold text-ink pt-4">How We Use Cookies</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <span className="font-semibold text-ink">Essential cookies:</span> enable basic site functionality and
          security.
        </li>
        <li>
          <span className="font-semibold text-ink">Analytics cookies:</span> help us measure website performance and
          visitor behavior (for example, analytics tools).
        </li>
        <li>
          <span className="font-semibold text-ink">Marketing cookies:</span> support advertising campaigns and may be
          used for retargeting through platforms such as Google Ads.
        </li>
      </ul>

      <h2 className="font-display text-xl font-bold text-ink pt-4">Managing Cookies</h2>
      <p>
        You can accept, reject, or customize cookie preferences at any time using your browser settings. Most browsers
        allow you to block or delete cookies; however, some site features may not function properly without them.
      </p>
      <p>
        By using our website, you consent to our use of cookies as described in this policy. For more details on how we
        handle personal data, please refer to our{' '}
        <Link href="/privacy-policy" className="text-teal hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
      <p>
        {SITE.operatedByLabel} · {SITE.email} · {SITE.phoneDisplay}
      </p>
    </LegalArticle>
  );
}
