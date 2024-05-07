/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  root: true,
  extends: ["@chaii/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

export default eslintConfig;
