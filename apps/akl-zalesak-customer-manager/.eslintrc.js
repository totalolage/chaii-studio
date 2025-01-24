/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  root: true,
  extends: ["../../packages/config-eslint/next.js", "plugin:drizzle/all"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

module.exports = eslintConfig;
