module.exports = {
  extends: [
    'standard-with-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // consistent usage of parentheses around single-argument arrow functions
    'arrow-parens': ['error', 'as-needed'],
    // reduces diff churn when adding to multi-line constructs
    'comma-dangle': ['error', 'always-multiline'],
    // no space inside braces
    'object-curly-spacing': ['error', 'never'],
    // makes it harder to overlook early return statements
    'padding-line-between-statements': ['error', {blankLine: 'always', prev: '*', next: 'return'}],
  },
  overrides: [
    {
      files: ['test/**/*.ts', 'test/**/*.js'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
      ],
      plugins: [
        'jest',
      ],
      env: {
        jest: true,
      },
      rules: {
        // focused tests that make it to CI will cause a build failure
        'jest/no-focused-tests': 'warn',
      },
    },
  ],
}
