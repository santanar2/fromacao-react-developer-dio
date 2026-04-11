import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: './dio-blog', // Fixa o root para evitar warnings de múltiplos lockfiles
  },
};

export default nextConfig;
