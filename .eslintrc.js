module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Adăugăm suport pentru Node.js
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Aceasta include 'eslint-config-prettier' automat
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest', // Sau cea mai recentă versiune ECMAScript dorită (2024,)
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier', // Adăugăm pluginul prettier aici
  ],
  settings: {
    react: {
      version: 'detect', // Detectare automată versiune React
    },
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/react-in-jsx-scope': 'off',
    // Alte reguli personalizate aici
  },
};
