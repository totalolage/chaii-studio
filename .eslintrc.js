// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["./packages/config-eslint/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

module.exports = eslintConfig;
