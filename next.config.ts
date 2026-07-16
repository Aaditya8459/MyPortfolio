/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/MyPortfolio",     // repo name
  assetPrefix: "/MyPortfolio/", // repo name
  images: { unoptimized: true },
};

export default nextConfig;
