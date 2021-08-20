module.exports = {
  plugins: ['prettier'],
  extends: ['@dsco/eslint-config', 'prettier', 'next'],
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-undef': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
      },
    },
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
      },
    },
  ],
};
