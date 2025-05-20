/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: '/HopeBridge-',
  assetPrefix: '/HopeBridge-',
  trailingSlash: true,
};

export default nextConfig;
