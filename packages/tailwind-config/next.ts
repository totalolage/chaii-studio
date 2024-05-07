import { merge } from "lodash/fp";
import base from "./base";
import { Config } from "tailwindcss";

const config = merge(base, {
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
