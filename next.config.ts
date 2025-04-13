import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  swcMinify: false, // Disable SWC minification
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
