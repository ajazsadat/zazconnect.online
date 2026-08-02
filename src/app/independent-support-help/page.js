import IndependentSupportHelp from '@/components/IndependentSupportHelp';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Independent Support Help | ${SITE.brandFull}`,
  description: `Get help comparing providers with ${SITE.brandFull}. Call a live agent or send a message — independent comparison, not affiliated with any carrier.`,
};

export default function Page() {
  return <IndependentSupportHelp />;
}
