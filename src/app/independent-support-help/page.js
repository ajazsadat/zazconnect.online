import IndependentSupportHelp from '@/components/IndependentSupportHelp';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Independent Support Help | ${SITE.brandFull}`,
  description: `Connect with ${SITE.brandFull} by phone for independent internet services and assistance. Not affiliated with any carrier.`,
};

export default function Page() {
  return <IndependentSupportHelp />;
}
