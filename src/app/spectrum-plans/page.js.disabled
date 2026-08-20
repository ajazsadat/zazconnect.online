import ProviderPage from '@/components/ProviderPage';
import { providerFaqs, providerContentSections } from '@/lib/providerContent';

export const metadata = {
  title: 'Compare Spectrum Internet & Cable Services | ZazConnect',
  description:
    'Compare Spectrum Internet & Cable Services — call to compare providers. Independent comparison with ZazConnect / Maverick Wells Inc.',
};

const SPECTRUM_TOPIC_TABS = [
  { label: 'About Spectrum', hash: '' },
  { label: 'Internet', hash: 'internet' },
  { label: 'TV', hash: 'tv' },
  { label: 'Customer Service', hash: 'customer-service' },
];

const SPECTRUM_SERVICES_GLANCE = {
  title: 'Spectrum Services at a Glance',
  intro:
    'Spectrum offers a variety of services to meet everyday household needs. Here are four key areas we highlight.',
  items: [
    {
      title: 'High-Speed Internet',
      icon: 'internet',
      body: 'Reliable internet with speeds starting around 100 Mbps, capable of supporting streaming, gaming, smart home devices, and remote work. Higher-speed tiers are available in select areas for households with heavy usage.',
    },
    {
      title: 'Cable TV',
      icon: 'tv',
      body: 'A wide selection of channels, on-demand shows, and entertainment packages for every taste. Flexible bundles allow viewers to pick content that matches their lifestyle.',
    },
    {
      title: 'Home Phone',
      icon: 'phone',
      body: 'Nationwide calling, voicemail, and dependable connections make Spectrum’s phone service a practical option for families and individuals who prefer a traditional home line.',
    },
    {
      title: 'Mobile Services',
      icon: 'mobile',
      body: 'Spectrum Mobile leverages advanced wireless technology to provide fast and reliable 5G connectivity. Introductory promotions may offer added savings for new customers in select areas.',
    },
  ],
};

export default function SpectrumPage() {
  return (
    <ProviderPage
      name="Spectrum"
      tagline="Widely available cable internet with flexible plan options for every household size."
      introTitle="Compare Spectrum internet packages — independent comparison"
      topicTabs={SPECTRUM_TOPIC_TABS}
      servicesGlance={SPECTRUM_SERVICES_GLANCE}
      benefits={[
        'Wide availability across many markets',
        'No data caps on many plans',
        'Often no long-term contracts',
        'Modem included on featured packages',
      ]}
      plans={[
        {
          name: 'Spectrum Advantage',
          price: '30',
          speed: 'Up to 100 Mbps download, 10 Mbps upload',
          features: ['Entry-level for basic tasks and email', 'No term contract required', 'Modem included'],
        },
        {
          name: 'Spectrum Premier',
          price: '50',
          speed: 'Up to 500 Mbps download, 20 Mbps upload',
          features: ['HD streaming and moderate gaming', 'No term contract required', 'Modem included'],
        },
        {
          name: 'Spectrum Gig',
          price: '70',
          speed: 'Up to 1,000 Mbps download, ~35 Mbps upload',
          features: ['Heavy users and 4K streaming', 'No term contract required', 'Modem included'],
        },
      ]}
      contentSections={[
        ...providerContentSections('Spectrum'),
        {
          title: 'Cable coverage that reaches more homes',
          body: 'Spectrum’s cable footprint covers many neighborhoods where fiber isn’t available yet. ZazConnect helps you compare Spectrum speeds and promotions against other providers at your ZIP code.',
        },
      ]}
      faqs={providerFaqs('Spectrum')}
    />
  );
}
