/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',

  // Image optimization disabled for static export
  // Note: For static sites, images are served as-is. Consider using
  // a CDN or image optimization service for production.
  images: {
    unoptimized: true,
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // React strict mode for better development experience
  reactStrictMode: true,

  // Trailing slash for consistent URLs (important for static hosting)
  trailingSlash: false,

  // Production source maps (optional, can be disabled for smaller builds)
  productionBrowserSourceMaps: false,

  // Optimize package imports
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
};

module.exports = nextConfig;
