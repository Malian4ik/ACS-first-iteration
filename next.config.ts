import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  distDir: ".next-local",
  images: {
    formats: ["image/avif", "image/webp"]
  },
  outputFileTracingRoot: path.join(__dirname)
};

export default nextConfig;
