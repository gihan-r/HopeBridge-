/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/HopeBridge-',
  assetPrefix: '/HopeBridge-/',
  trailingSlash: true,
};

export default nextConfig;
