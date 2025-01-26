/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  root: true,
  extends: ["../../packages/config-eslint/next.js", "plugin:drizzle/all"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        project: true,
      },
    },
    {
      files: ["!./{app,utils}/**"],
      rules: {
        "import/no-unused-modules": "off",
      },
    },
  ],
};

module.exports = eslintConfig;
