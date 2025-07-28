/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.10minuteschool.com',
    ],
    // Or use the newer remotePatterns (recommended for Next.js 13+)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.10minuteschool.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // ... your other config options
}

module.exports = nextConfig