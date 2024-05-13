/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@chaii/config-eslint/react-internal.js"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-redeclare": "off",
  },
};
