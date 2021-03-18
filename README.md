# Packula ESLint configuration

[![Current version][badge-version-image]][badge-version-link]

[badge-version-image]: https://img.shields.io/npm/v/@packula/eslint-config?label=%40packula%2Feslint-config&logo=npm&style=for-the-badge
[badge-version-link]: https://npmjs.com/package/@packula/eslint-config

## Installation

Install as an NPM and then resolve all the peer dependency issues. Peer
dependencies are necessary because of [an ESLint limitation].

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
