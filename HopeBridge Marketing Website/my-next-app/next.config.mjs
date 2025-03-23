/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/HopeBridge-Marketing-Website',
    assetPrefix: '/HopeBridge-Marketing-Website/',
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
      });
      return config;
    },
  };
  
  export default nextConfig;
  