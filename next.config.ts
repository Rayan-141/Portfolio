import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: process.cwd(),
  reactCompiler: true,
  cacheComponents: true,
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
  images: {
    qualities: [65, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "heatmap.shymike.dev",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "stpiusmulund.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "t3.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "ratnamcollege.edu.in",
      },
      {
        protocol: "https",
        hostname: "www.uniranks.com",
      },
    ],
  },
};

export default nextConfig;
