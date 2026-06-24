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
  experimental: {
    // Inline the CSS into the HTML instead of a render-blocking <link>.
    // Removes the render-blocking stylesheet request (Lighthouse: ~130ms).
    inlineCss: true,
  },
  // 301 redirects from old Framer URLs if any slugs differ
  async redirects() {
    return [];
  },
};

export default nextConfig;
