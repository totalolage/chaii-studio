import tailwindConfig from "@chaii/config-tailwind/tailwind.config";
import { Config } from "tailwindcss";
import { mergeWith } from "lodash/fp";

const config = mergeWith(
  (lhs, rhs, key) => {
    if (key === "content" && Array.isArray(lhs) && Array.isArray(rhs))
      return [...lhs, ...rhs];
  },
  tailwindConfig,
  {
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
      screens: {
        sm: "600px",
      },
      extend: {
        colors: {
          transparent: "transparent",
        },
        fontFamily: {
          sans: ["var(--font-sans)"],
          serif: ["var(--font-serif)"],
          mono: ["var(--font-mono)"],
        },
        borderWidth: {
          3: "0.2rem",
        },
        animation: {
          "scroll-left": "scroll-left 10s linear infinite",
        },
        keyframes: {
          "scroll-left": {
            "0%": { transform: "translateX(0%)", left: "100%" },
            "100%": { transform: "translateX(-100%)", left: "0%" },
          },
        },
      },
    },
  },
) satisfies Config;

export default config;
