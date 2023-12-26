// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true, es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'prettier.config.cjs', '@typescript-eslint', 'node_modules', 'tailwind.config.js'],
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', 'react-refresh', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', {
      tabWidth: 2,
      singleQuote: true,
      arrowParens: 'always',
      trailingComma: 'all',
      endOfLine: 'auto',
      bracketSpacing: true,
      bracketSameLine: true,
      editorconfig: true
    }],
    "import/order": ["error", {
      "groups": ["builtin", "external", "parent", "sibling", "index"],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "warn",
    'no-void': 0,
    'no-param-reassign': 0,
    "array-element-newline": [
      "error",
      {
        "ArrayExpression": "consistent",
        "ArrayPattern": {
          "minItems": 3
        }
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  }
};
