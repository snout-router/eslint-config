# Packula ESLint configuration

## Installation

- Available as NPM module `@packula/eslint-config`
- Needs lots of peer dependencies because of [an ESLint limitation]

## Usage

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@packula',
  ],
}
```

<!-- References -->

[an eslint limitation]: https://github.com/eslint/eslint/issues/3458
