module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@feature-sliced/eslint-config/rules/import-order/experimental",
    "@feature-sliced/eslint-config/rules/public-api",
    "@feature-sliced/eslint-config/rules/layers-slices",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/no-internal-modules": "off",
    "react/react-in-jsx-scope": "off",
    "import/order": "warn",
    // "boundaries/element-types": "warn",
  },
};
