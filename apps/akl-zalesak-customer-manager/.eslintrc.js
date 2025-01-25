/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  root: true,
  extends: ["../../packages/config-eslint/next.js", "plugin:drizzle/all"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  overrides: [
    {
      files: ["!./app/**"],
      rules: {
        "import/no-unused-modules": "off",
      },
    },
  ],
};

module.exports = eslintConfig;
