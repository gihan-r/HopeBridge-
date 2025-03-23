/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Disable image optimization
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allow remote images if needed
        },
      ],
    },
    basePath: '/HopeBridge-', 
    assetPrefix: '/HopeBridge-/', 
    trailingSlash: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
      });
      return config;
    },
  };
  
  export default nextConfig;
  