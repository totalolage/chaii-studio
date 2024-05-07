/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  root: true,
  extends: ["@chaii/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-redeclare": "off",
  },
};

export default eslintConfig;
