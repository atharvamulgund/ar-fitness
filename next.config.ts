import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // allow external images from unsplash
    domains: ["images.unsplash.com"],
  }
};

export default nextConfig;
