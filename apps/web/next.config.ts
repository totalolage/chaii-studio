import { NextConfig } from "next";

export default {
  transpilePackages: ["@chaii/ui"],
  experimental: {
    typedRoutes: true,
  }
} satisfies NextConfig;
