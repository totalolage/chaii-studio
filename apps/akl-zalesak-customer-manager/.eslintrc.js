/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  root: true,
  extends: ["../../packages/config-eslint/next.js", "plugin:drizzle/all"],
  plugins: ["boundaries"],
  parser: "@typescript-eslint/parser",
  settings: {
    "boundaries/include": ["src/**/*"],
    "boundaries/elements": [
      {
        mode: "full",
        type: "shared",
        pattern: [
          "src/components/**/*",
          "src/db/**/*",
          "src/lib/**/*",
          "src/utils/**/*",
          "src/assets/**/*",
          "src/env.ts",
        ],
      },
      {
        mode: "full",
        type: "feature",
        capture: ["featureName"],
        pattern: ["src/features/*/**/*"],
      },
      {
        mode: "full",
        type: "app",
        capture: ["_", "fileName"],
        pattern: ["src/app/**/*"],
      },
      {
        mode: "full",
        type: "neverImport",
        pattern: ["src/*", "src/tasks/**/*"],
      },
    ],
  },
  rules: {
    "boundaries/no-unknown": ["error"],
    "boundaries/no-unknown-files": ["error"],
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: ["shared"],
            allow: ["shared"],
          },
          {
            from: ["feature"],
            allow: [
              "shared",
              ["feature", { featureName: "${from.featureName}" }],
            ],
          },
          {
            from: ["app", "neverImport"],
            allow: ["shared", "feature"],
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        project: true,
      },
    },
    {
      files: ["!./{app,utils}/**","!./src/{app,utils}/**"],
      rules: {
        "import/no-unused-modules": "off",
      },
    },
  ],
};

module.exports = eslintConfig;
