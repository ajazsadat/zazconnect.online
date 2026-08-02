import LiveAgentClient from './LiveAgentClient';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Live Agent Help | ${SITE.brandFull}`,
  description: `Call now and we'll walk you through your options with ${SITE.brandFull} — independent comparison, not affiliated with any carrier.`,
};

export default function Page() {
  return <LiveAgentClient />;
}
