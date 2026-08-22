import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
