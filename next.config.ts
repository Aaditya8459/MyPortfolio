import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/MyPortfolio",      
  assetPrefix: "/MyPortfolio/",
};

export default nextConfig;
