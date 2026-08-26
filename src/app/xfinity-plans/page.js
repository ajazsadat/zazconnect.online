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
          subtitle: 'Up to 50 Mbps Download – browsing, email & video calls',
          features: ['Small households (up to 4 devices)', 'Stream, video conferencing, downloads'],
        },
        {
          name: '300 Mbps*',
          price: '50',
          subtitle: 'Up to 300 Mbps Download – everyday streaming & browsing',
          features: ['Supports up to 5 devices', 'Everyday streaming & downloads'],
        },
        {
          name: '500 Mbps*',
          price: '60',
          subtitle: 'Up to 500 Mbps Download – multi-device homes',
          features: ['Connect up to 8 devices', 'Stream & video conferencing'],
        },
        {
          name: '1000 Mbps*',
          price: '70',
          subtitle: 'Up to 1000 Mbps Download – heavy downloads',
          features: ['Supports 12+ devices', 'Extreme streaming speed'],
        },
        {
          name: '1200 Mbps*',
          price: '80',
          subtitle: 'Up to 1200 Mbps Download – 15+ devices',
          features: ['Fast downloads & HD on multiple screens'],
        },
        {
          name: '2000 Mbps*',
          price: '100',
          subtitle: 'Up to 2000 Mbps Download – unlimited devices',
          features: ['Ultimate streaming & gaming experience'],
        },
      ]}
      contentSections={providerContentSections('Xfinity')}
      faqs={providerFaqs('Xfinity')}
    />
  );
}
