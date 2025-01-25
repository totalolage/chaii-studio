/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  root: true,
  extends: ["../../packages/config-eslint/next.js", "plugin:drizzle/all"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  rules: {
    "import/no-unused-modules": [
      "error",
      {
        src: ["./app/**", "./db/**"],
        missingExports: true,
      },
    ],
  },
};

module.exports = eslintConfig;
