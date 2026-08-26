import { SITE } from '@/lib/site';

const FEATURES = [
  'Speed (Max)',
  'Upload Speeds',
  'Starting Price',
  'Price Guarantee',
  'Customer Service',
  'Fiber Availability',
  'Coverage',
  'Reliability',
  'Security Features',
  'Contracts',
  'Data Caps',
  'Bundles / Discounts',
  'Best For',
];

const AT_T_FIBER_COLUMN = {
  name: 'AT&T Fiber',
  values: [
    'Up to 5 Gbps download (select areas)',
    'Symmetrical (same as download) on many fiber plans',
    'From about $55/mo (where available)',
    'Often fewer price increases; no annual contract on many fiber plans',
    'Generally strong ratings in fiber markets',
    'Fiber footprint still limited nationally',
    'Available where the fiber network has been built out',
    'Fiber tends to be more consistent where available',
    'Built-in security features on some plans',
    'No contracts on many fiber plans',
    'No data caps on many fiber plans',
    'Wireless bundle discounts available in some offers',
    'Performance, work-from-home, heavy uploads',
  ],
};

const CABLE_INTERNET_COLUMN = {
  name: 'Cable Internet (typical)',
  values: [
    'Up to about 2 Gbps download (select areas)',
    'Typically much lower upload than download',
    'From about $30/mo (where available)',
    'Promotional rates often step up after the intro period',
    'Mixed satisfaction by market',
    'Limited true fiber; mostly hybrid cable network',
    'Broad coverage across established cable markets',
    'Generally strong, can vary with network congestion',
    'Basic security; add-ons often available',
    'No annual contracts on many newer offers',
    'Data caps on some plans unless an unlimited add-on applies',
    'Strong internet + mobile/TV bundling',
    'Coverage, budget plans, and bundling deals',
  ],
};

export const AT_T_VS_CABLE_COMPARISON = {
  title: 'AT&T Fiber vs. Cable Internet: How the Options Compare',
  columns: [AT_T_FIBER_COLUMN, CABLE_INTERNET_COLUMN],
};

const DEFAULT_COLUMNS = [
  {
    name: 'Xfinity (Comcast)',
    values: [
      'Up to 2 Gbps download (select areas)',
      'Typically lower upload vs download on cable',
      'From about $30/mo (where available)',
      'Some plans offer multi-year price locks',
      'Mixed to improving satisfaction by market',
      'Limited true fiber; mostly cable network',
      'Strong coverage in many cable markets',
      'Generally strong, can vary with network congestion',
      'Basic security; add-ons often available',
      'No annual contracts on many newer offers',
      'Data caps on many plans unless unlimited add-on',
      'Strong internet + mobile/TV bundling',
      'Coverage + bundling deals',
    ],
  },
  {
    name: 'Spectrum (Charter)',
    values: [
      'Up to 1 Gbps (select areas)',
      'Typically lower upload on cable',
      'From about $30/mo (where available)',
      'Fewer long-term price-lock guarantees',
      'Mixed reviews by market',
      'Limited fiber; mostly cable',
      'Good coverage in many cable markets',
      'Good overall; consistency can vary',
      'Basic security features',
      'No contracts on many plans',
      'No data caps on many plans',
      'Fewer bundle advantages than some peers',
      'Budget + simple plans',
    ],
  },
];

export default function ProviderComparisonTable({ title, columns = DEFAULT_COLUMNS }) {
  return (
    <section className="py-16 bg-white border-y border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-3">
          {title || `Provider Comparison: How the Top Internet Services Stack Up by ${SITE.brandFull}`}
        </h2>
        <p className="text-muted text-sm leading-relaxed max-w-4xl mb-8">
          The information in the table below reflects {SITE.brandFull}&apos;s independent research and observations. It is
          based on publicly available data, performance trends, and internal evaluations. This content is for
          informational purposes only and is not affiliated with or endorsed by any of the providers listed. Pricing,
          speeds, and features vary by address and change over time — confirm details with the provider before you
          enroll.
        </p>
        <div className="overflow-x-auto border border-[var(--line)]">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-[#eef5f6] text-ink">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold sticky left-0 bg-[#eef5f6] z-10 min-w-[140px]">
                  Feature
                </th>
                {columns.map((p) => (
                  <th scope="col" key={p.name} className="px-4 py-3 font-semibold min-w-[180px]">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feature, rowIndex) => (
                <tr key={feature} className="border-t border-[var(--line)] align-top">
                  <th
                    scope="row"
                    className="px-4 py-3 font-semibold text-ink sticky left-0 bg-[#f7fbfc] z-10 text-left"
                  >
                    {feature}
                  </th>
                  {columns.map((p) => (
                    <td key={p.name} className="px-4 py-3 text-muted leading-relaxed">
                      {p.values[rowIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
