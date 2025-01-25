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
          primary: {
            50: "#F1F9F5",
            100: "#DCEFE5",
            200: "#B5DEC9",
            300: "#84C8A5",
            400: "#4EAC7B",
            500: "#377A57",
            600: "#316D4E",
            700: "#2B5F44",
            800: "#234D37",
            900: "#183526",
            950: "#132A1E",
          },
          secondary: {
            50: "#FFF8EB",
            100: "#FFF1D6",
            200: "#FFE2A9",
            300: "#FED176",
            400: "#FEBC35",
            500: "#F9A601",
            600: "#DF9501",
            700: "#C18101",
            800: "#986601",
            900: "#604000",
            950: "#241800",
          },
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
