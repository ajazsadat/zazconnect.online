import LiveAgentClient from './LiveAgentClient';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Live Agent Help | ${SITE.brandFull}`,
  description: `Speak with a live agent from ${SITE.brandFull}. Call now and we'll walk you through your options — independent comparison, not affiliated with any carrier.`,
};

export default function Page() {
  return <LiveAgentClient />;
}
