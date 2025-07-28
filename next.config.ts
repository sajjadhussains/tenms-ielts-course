/** @type {import('next').NextConfig} */
const nextConfig = {
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
