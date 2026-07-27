import LiveAgentClient from './LiveAgentClient';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Live Agent Help | ${SITE.brandFull}`,
  description: `Connect with ${SITE.brandFull} by phone or live chat for independent internet plan comparison and assistance. Not affiliated with any carrier.`,
};

export default function Page() {
  return <LiveAgentClient />;
}
