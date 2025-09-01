/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['next-image-export-optimizer'],
  trailingSlash: true,
};

module.exports = nextConfig;
