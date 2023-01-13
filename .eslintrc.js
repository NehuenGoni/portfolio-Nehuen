module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    files: ['*.ts', '*.jsx', '*.ts', '*.tsx'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'testing-library/no-node-access': 'off',
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
  };