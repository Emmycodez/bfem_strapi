/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
       {
        protocol: 'http',
        hostname: "**"
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;