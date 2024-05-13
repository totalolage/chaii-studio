// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@chaii/config-eslint/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

export default eslintConfig;
