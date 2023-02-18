module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "prettier",
  ],
  parser: "@typescript-eslint/parser", //babel-eslint
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["import", "prettier", "@typescript-eslint"], // <----
  root: true,
  rules: {
    semi: "warn",
    eqeqeq: "warn",
    "no-console": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
