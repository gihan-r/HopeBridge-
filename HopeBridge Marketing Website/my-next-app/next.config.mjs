/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Disable optimization for external images
      loader: 'imgix', // Ensures external images are correctly loaded (if applicable)
      domains: ['example.com'], // Optional: specify domains if using external images
    },
    basePath: '/HopeBridge-', // Ensure it matches the subpath of your GitHub Pages URL
    assetPrefix: '/HopeBridge-/', // Ensure it matches the subpath of your GitHub Pages URL
    trailingSlash: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        type: 'asset/resource', // Ensure image and font assets are handled
      });
      return config;
    },
  };
  
  export default nextConfig;
  