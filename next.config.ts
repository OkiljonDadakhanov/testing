import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap", // This should match your sitemap function
      },
    ];
  },
};

export default nextConfig;
