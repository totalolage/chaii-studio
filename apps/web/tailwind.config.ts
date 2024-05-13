import tailwindConfig from "@chaii/config-tailwind/tailwind.config";
import { Config } from "tailwindcss";
import { merge } from "lodash/fp";

const config = merge(tailwindConfig, {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
}) satisfies Config;

export default config;
