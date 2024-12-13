/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nifty.spider.ws',
          },
        ],
      },
};

export default nextConfig;
