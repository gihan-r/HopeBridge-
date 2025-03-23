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
    basePath: '/HopeBridge-', // Make sure this matches your GitHub Pages URL path
    assetPrefix: '/HopeBridge-/', // Same here
    trailingSlash: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
      });
      return config;
    },
  };
  
  export default nextConfig;
  