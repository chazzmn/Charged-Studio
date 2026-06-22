import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
  // 301 redirects from old Framer URLs if any slugs differ
  async redirects() {
    return [];
  },
};

export default nextConfig;
