/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  root: true,
  extends: ["@chaii/config-eslint/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

module.exports = eslintConfig;
