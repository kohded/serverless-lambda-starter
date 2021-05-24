module.exports = {
  '*.{js,json,md,ts,yml}': 'prettier -c --debug-check',
  '*.{js,ts}': [
    () => 'eslint', // https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
  ],
};
