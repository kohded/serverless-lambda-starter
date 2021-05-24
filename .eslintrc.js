module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    jest: true,
    mongo: true,
    node: true,
  },
  extends: [
    // Waiting on base support, don't need React: https://github.com/iamturns/eslint-config-airbnb-typescript/issues/6
    // Installs and sets up: @typescript-eslint/eslint-plugin, import, jsx-a11y, react, react-hooks
    // https://github.com/iamturns/eslint-config-airbnb-typescript#user-content-i-wish-this-config-would-support-
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:eslint-comments/recommended',
    // Sets up eslint-config-prettier and eslint-plugin-prettier.
    // https://github.com/prettier/eslint-plugin-prettier#user-content-recommended-configuration
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.build', '.eslintrc.js', '.serverless', 'coverage', 'dist'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      'error',
      // Immer - https://github.com/immerjs/immer/issues/189#issuecomment-703083451
      { props: true, ignorePropertyModificationsForRegex: ['^draft'] },
    ],
  },
};
