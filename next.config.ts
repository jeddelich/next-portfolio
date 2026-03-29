import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.w3.org",
      },
      {
        protocol: "https",
        hostname: "cdn.iconscout.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
