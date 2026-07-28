/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/compare/xfinity-plans', destination: '/xfinity-plans', permanent: true },
      { source: '/compare/spectrum-plans', destination: '/spectrum-plans', permanent: true },
      { source: '/compare/att-plans', destination: '/att-plans', permanent: true },
      { source: '/compare', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
