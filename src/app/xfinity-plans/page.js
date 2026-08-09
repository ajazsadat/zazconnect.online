import ProviderPage from '@/components/ProviderPage';
import { providerFaqs, providerContentSections } from '@/lib/providerContent';

export const metadata = {
  title: 'Xfinity Internet & Cable Services | ZazConnect',
  description:
    'Xfinity Internet & Cable Services — call to compare providers. Independent comparison with ZazConnect / Maverick Wells Inc.',
};

export default function XfinityPage() {
  return (
    <ProviderPage
      name="Xfinity"
      brandMark="Xfinity"
      tagline="Independent comparison of Xfinity internet packages for streaming, work, and gaming."
      heroTitle="Compare Xfinity internet and cable services With JKcompareinternet"
      introTitle="Compare Xfinity internet packages — independent comparison"
      benefits={[
        'Speed tiers for streaming, gaming & work',
        'Wide availability in many markets',
        'Strong promotional deals',
        'Advanced WiFi coverage options',
      ]}
      plans={[
        {
          name: '50 Mbps*',
          price: '35',
          subtitle: '50/50 Mbps – browsing, email & video calls',
          features: ['Small households (up to 4 devices)', 'Stream, video conferencing, downloads'],
        },
        {
          name: '300 Mbps*',
          price: '50',
          subtitle: '300/300 Mbps – everyday streaming & browsing',
          features: ['Supports up to 5 devices', 'Everyday streaming & downloads'],
        },
        {
          name: '500 Mbps*',
          price: '60',
          subtitle: '500/500 Mbps – multi-device homes',
          features: ['Connect up to 8 devices', 'Stream & video conferencing'],
        },
        {
          name: '1000 Mbps*',
          price: '70',
          subtitle: '1000/1000 Mbps – heavy downloads',
          features: ['Supports 12+ devices', 'Extreme streaming speed'],
        },
        {
          name: '1200 Mbps*',
          price: '80',
          subtitle: '1200/1200 Mbps – 15+ devices',
          features: ['Fast downloads & HD on multiple screens'],
        },
        {
          name: '2000 Mbps*',
          price: '100',
          subtitle: '2000/2000 Mbps – unlimited devices',
          features: ['Ultimate streaming & gaming experience'],
        },
      ]}
      contentSections={providerContentSections('Xfinity')}
      faqs={providerFaqs('Xfinity')}
    />
  );
}
