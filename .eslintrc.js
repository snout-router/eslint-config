module.exports = {
  extends: ["eslint:recommended", "prettier"],
  env: {
    node: true,
  },
  rules: {
    "no-unused-vars": [
      "error",
      {
        // allow unused args if they start with _
        argsIgnorePattern: "^_",
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            // allow unused args if they start with _
            argsIgnorePattern: "^_",
          },
        ],
      },
    },
    {
      files: [
        "*.spec.js",
        "*.spec.jsx",
        "*.spec.ts",
        "*.spec.tsx",
        "*.test.js",
        "*.test.jsx",
        "*.test.ts",
        "*.test.tsx",
      ],
      extends: ["plugin:jest/recommended"],
      plugins: ["jest"],
      env: {
        jest: true,
      },
      rules: {
        // focused tests that make it to CI will cause a build failure
        "jest/no-focused-tests": "warn",
      },
    },
  ],
};
