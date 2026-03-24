import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/phage-database-guide',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
