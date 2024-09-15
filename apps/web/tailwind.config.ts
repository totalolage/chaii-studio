import tailwindConfig from "@chaii/config-tailwind/tailwind.config";
import { Config } from "tailwindcss";
import { mergeWith } from "lodash/fp";

const chaiiColors = {
  black: "#1D1E17",
  white: "#FFFFF2",
  blue: {
    DEFAULT: "#0624ED",
    50: "#D5DBFE",
    100: "#C2C9FD",
    200: "#9AA7FC",
    300: "#7284FB",
    400: "#4A61FA",
    500: "#223EF9",
    600: "#0624ED",
    700: "#051CB6",
    800: "#031380",
    900: "#020B49",
    950: "#01072D",
  },
  canary: {
    DEFAULT: "#DFFE5C",
    50: "#FBFFEA",
    100: "#F7FFD6",
    200: "#EFFEAD",
    300: "#E7FE85",
    400: "#DFFE5C",
    500: "#D4FE24",
    600: "#BCE801",
    700: "#8FB101",
    800: "#627901",
    900: "#354100",
    950: "#1E2500",
  },
};

const config = mergeWith(
  (lhs, rhs) => {
    if (Array.isArray(lhs) && Array.isArray(rhs)) {
      return [...lhs, ...rhs];
    }
  },
  tailwindConfig,
  {
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
      colors: {
        ...chaiiColors,
        foreground: chaiiColors.black,
        background: chaiiColors.white,
      },
      extend: {
        fontFamily: {
          sans: ["var(--font-sans)"],
          serif: ["var(--font-serif)"],
          mono: ["var(--font-mono)"],
        },
        borderWidth: {
          3: "0.2rem",
        },
      },
    },
  },
) satisfies Config;

export default config;
