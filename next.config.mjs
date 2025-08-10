/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allows all domains (use with caution in production)
      },
    ],
  },
};

export default nextConfig;
