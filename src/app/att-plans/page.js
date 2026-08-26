import ProviderPage from '@/components/ProviderPage';
import { providerFaqs, providerContentSections } from '@/lib/providerContent';

export const metadata = {
  title: 'AT&T Internet & Cable Services | ZazConnect',
  description:
    'AT&T Internet & Cable Services — call to get assistance to compare providers. Independent comparison with ZazConnect / Maverick Wells Inc.',
};

export default function AttPage() {
  return (
    <ProviderPage
      name="AT&T"
      brandMark="AT&T Fiber"
      tagline="Compare AT&T fiber and wireless home internet options available in your area."
      introTitle="Compare AT&T Fiber internet packages — independent comparison"
      benefits={[
        'Strong fiber network where available',
        'No data caps on many fiber plans',
        'Plans for streaming and remote work',
        'Competitive upload speeds on fiber',
      ]}
      plans={[
        {
          name: 'Internet Air',
          price: '50',
          speed: 'Up to 225 Mbps download, 5 Mbps upload',
          features: ['Video meetings and browsing', 'No term contract required', 'Auto-pay / paperless discount'],
        },
        {
          name: 'Preferred Plan',
          price: '65',
          speed: 'Up to 500 Mbps download, 50 Mbps upload',
          features: ['4K streaming and remote work', 'No term contract required', 'Reliable high-speed performance'],
        },
        {
          name: 'Ultimate Plan',
          price: '80',
          speed: 'Up to 1 Gbps download, 100 Mbps upload',
          features: ['Smart homes and 4K', 'No term contract required', 'Top-tier speed for gaming'],
        },
      ]}
      contentSections={[
        ...providerContentSections('AT&T'),
        {
          title: 'Fiber where it matters',
          body: 'Where AT&T Fiber is available, symmetrical speeds can support multi-device homes, cloud backups, and low-latency gaming. We’ll help you check availability at your address before you enroll.',
        },
      ]}
      faqs={providerFaqs('AT&T')}
    />
  );
}
