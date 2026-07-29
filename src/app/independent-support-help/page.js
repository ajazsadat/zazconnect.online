import { Poppins, Montserrat } from 'next/font/google';
import IndependentSupportHelp from '@/components/IndependentSupportHelp';
import { SITE } from '@/lib/site';

const poppins = Poppins({
  variable: '--font-support-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const montserrat = Montserrat({
  variable: '--font-support-montserrat',
  subsets: ['latin'],
  weight: ['600'],
});

export const metadata = {
  title: `Independent Support Help | ${SITE.brandFull}`,
  description: `Connect with ${SITE.brandFull} by phone for independent internet services and assistance. Not affiliated with any carrier.`,
};

export default function Page() {
  return (
    <div className={`${poppins.variable} ${montserrat.variable}`}>
      <IndependentSupportHelp />
    </div>
  );
}
