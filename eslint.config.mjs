// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import UnusedImportsPlugin from "eslint-plugin-unused-imports";
import PrettierConfig from "eslint-config-prettier";
import * as ImportPlugin from "eslint-plugin-import";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["node_modules/", "eslint.config.mjs"],
  },
  eslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "unused-imports": UnusedImportsPlugin,
      import: ImportPlugin,
    },
    rules: {
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-redundant-type-constituents": "warn",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-this-alias": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/consistent-type-imports": "error",

      // replaced by 'unused-imports/no-unused-vars'
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "import/order": "error",
      "import/no-duplicates": "error",
    },
  },
  // @ts-ignore
  PrettierConfig,
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
    rules: {
      "@typescript-eslint/no-floating-promises": "off",
    },
  }
);
