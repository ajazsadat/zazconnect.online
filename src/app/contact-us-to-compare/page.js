import ContactUsToCompareClient from './ContactUsToCompareClient';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Contact Us to Compare | ${SITE.brandFull}`,
  description: `Call now and we'll walk you through your options with ${SITE.brandFull} — an independent, authorized reseller, not owned or controlled by any carrier.`,
};

export default function Page() {
  return <ContactUsToCompareClient />;
}
