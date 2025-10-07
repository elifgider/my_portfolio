import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github-readme-activity-graph.vercel.app' },
      { protocol: 'https', hostname: 'ghchart.rshah.org' }
    ]
  }
};

export default nextConfig;
