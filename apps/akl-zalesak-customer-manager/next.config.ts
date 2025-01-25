import { NextConfig } from "next";

export default {
  experimental: {
    typedRoutes: true,
    reactCompiler: true,
    forceSwcTransforms: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@svgr/webpack",
          options: { babel: false },
        },
      ],
    });
    return config;
  },
} satisfies NextConfig;
