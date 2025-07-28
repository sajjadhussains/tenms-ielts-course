/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // Allow any hostname over HTTPS
      },
    ],
  },
};

export default nextConfig;