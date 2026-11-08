import ProviderPage from '@/components/ProviderPage';
import { providerFaqs } from '@/lib/providerContent';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Compare Spectrum Internet® | ZazConnect',
  description:
    'Review Spectrum Fiber-Powered Internet plans, including Internet 100, Internet 500, and Internet 1 Gig. Independent comparison with ZazConnect / Maverick Wells Inc.',
};

const SPECTRUM_TOPIC_TABS = [{ label: 'About Spectrum', hash: '' }];

const FIBER_COPY =
  'The Spectrum network combines fiber technology with an advanced HFC infrastructure to deliver fast, consistent performance across the country. Spectrum Internet® is powered by fiber and connected to the premises by coaxial lines.';

const STREAM_TV_COPY =
  'Spectrum Stream TV plans give you more because popular streaming apps are included with live TV in select plans at no additional charge — providing customers with up to $140/mo in added value.';

const SPECTRUM_SERVICES_GLANCE = {
  title: 'Spectrum Services at a Glance',
  intro:
    'Spectrum offers a variety of services to meet everyday household needs. Here are four key areas we highlight.',
  items: [
    {
      title: 'Spectrum Fiber-Powered Internet®',
      icon: 'internet',
      body: FIBER_COPY,
    },
    {
      title: 'Spectrum Stream TV®',
      icon: 'tv',
      body: STREAM_TV_COPY,
    },
    {
      title: 'Spectrum Voice®',
      icon: 'phone',
      points: [
        'Home Phone with unlimited calling in the U.S., Canada, Mexico, Puerto Rico and more.',
        'No added fees or dropped calls',
        'Includes Voicemail',
        'Up to 28 popular features like Block Unwanted Callers',
      ],
    },
    {
      title: 'Spectrum Mobile®',
      icon: 'mobile',
      eyebrow: 'Included with Spectrum Internet',
      points: [
        'Includes free Unlimited Mobile Service for 1 year',
        'Bundle two or more lines and save',
        'With Spectrum Mobile, there are no extra fees, no taxes and no contracts',
        'Spectrum Internet required',
      ],
    },
  ],
};

const YEAR_ONE = { priceLabel: '', priceTerm: 'For 1 year' };

export default function SpectrumPage() {
  return (
    <ProviderPage
      name="Spectrum"
      heroTitle={`Compare Spectrum Internet® With ${SITE.brandFull}`}
      tagline="Widely available Fiber-Powered Internet with flexible plan options for every household size."
      introTitle="Compare Spectrum internet packages — independent comparison"
      introBody={`${SITE.comparisonPlatformDisclosure} We help you review Spectrum options so you can choose what fits, then enroll directly with the provider.`}
      closingBody={`Getting Spectrum Internet is easier with ${SITE.brandFull}. Call to review features and pricing and find the best fit for your home or business. Our team guides you every step of the way — clear, reliable, and hassle-free.`}
      topicTabs={SPECTRUM_TOPIC_TABS}
      servicesGlance={SPECTRUM_SERVICES_GLANCE}
      benefits={[
        'Fast and reliable speeds.',
        'No data caps.',
        'No contracts. No hassles. No risks.',
        'Free Internet modem.',
      ]}
      plansNote="*Pricing may vary by ZIP code and is subject to change."
      plans={[
        {
          name: 'Spectrum Internet 100',
          price: '30',
          ...YEAR_ONE,
          features: [
            'Speeds up to 100 Mbps',
            'Reliable speeds for a smooth online experience',
            'Location-based eligibility required for non-online channels; no restrictions with online orders',
          ],
        },
        {
          name: 'Spectrum Internet 500',
          price: '40',
          ...YEAR_ONE,
          features: [
            'Speeds up to 500 Mbps',
            'Powers seamless work and entertainment across multiple devices',
            'High-speed Internet with no data caps',
            'Save more when you bundle Internet with other Spectrum services',
          ],
        },
        {
          name: 'Spectrum Internet 1 Gig',
          price: '60',
          ...YEAR_ONE,
          features: [
            'Includes Advanced WiFi',
            'Speeds up to 1 Gig (1 Gbps)',
            'Fuels serious gaming, streaming and working from home for the whole household',
            'For fast performance, choose Internet Gig',
            'Save more when you bundle Internet with other Spectrum services',
          ],
        },
      ]}
      contentSections={[
        {
          title: 'Built for everyday household use',
          body: 'Speeds and features vary by address. Compare Spectrum options for streaming, remote work, and multi-device homes — then confirm availability before you enroll.',
        },
        {
          title: 'What to know about Spectrum',
          body: 'ZazConnect helps you review Spectrum plan types to find the best fit for you. Network performance, installation, and billing remain with Spectrum.',
        },
        {
          title: 'Compare before you commit',
          body: 'We’ll walk through typical pricing ranges, promo windows, and equipment notes so you understand the full picture — then you complete signup directly with the provider.',
        },
        {
          title: 'Spectrum Fiber-Powered Internet',
          linkLabel: 'Find availability',
          linkHref: `tel:${SITE.phoneTel}`,
        },
      ]}
      faqs={providerFaqs('Spectrum')}
    />
  );
}
