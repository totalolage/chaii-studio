const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
    "plugin:tailwindcss/recommended",
    "plugin:import/recommended",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn", "react-compiler", "validate-jsx-nesting"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    tailwindcss: {
      callees: ["classnames", "clsx", "cn", "tw", "tailwindMerge"],
      whitelist: ["center(-[xy])?"],
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    "import/no-unused-modules": [
      "error",
      {
        missingExports: true,
        unusedExports: true,
        ignoreExports: [
          "app/**/{default,error,instrumentation,layout,loading,mdx-components,middleware,not-found,page,route,template}.{t,{c,m,}j}s{x,}",
          "*.config.{t,{c,m,}j}s{x,}",
          "*-env.d.ts",
        ],
      },
    ],
    "import/no-mutable-exports": "warn",
    "import/no-cycle": "error",
    "import/no-relative-packages": "warn",
    "import/no-self-import": "error",
    "import/first": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
      },
    ],
    "react-compiler/react-compiler": "error",
    "validate-jsx-nesting/no-invalid-jsx-nesting": "error",
  },
};
