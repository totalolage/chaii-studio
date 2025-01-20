import { NextConfig } from "next";

export default {
  experimental: {
    typedRoutes: true,
    reactCompiler: true,
  },
} satisfies NextConfig;
