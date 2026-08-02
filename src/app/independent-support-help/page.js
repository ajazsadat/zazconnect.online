import IndependentSupportHelp from '@/components/IndependentSupportHelp';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Independent Support Help | ${SITE.brandFull}`,
  description: `Speak with a live agent from ${SITE.brandFull}. Call now and we'll walk you through your options — independent comparison, not affiliated with any carrier.`,
};

export default function Page() {
  return <IndependentSupportHelp />;
}
