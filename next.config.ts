import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration
  output: "export",
  trailingSlash: true,
  images: {
    // Disable the Image Optimization API for static hosting
    unoptimized: true,
  },
};

export default nextConfig;
