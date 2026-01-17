import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules"]),

  {
    files: ["**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],

    plugins: {
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.json", "./tsconfig.app.json"],
        },
      },
    },

    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            { pattern: "@app/**", group: "internal" },
            { pattern: "@pages/**", group: "internal" },
            { pattern: "@widgets/**", group: "internal" },
            { pattern: "@features/**", group: "internal" },
            { pattern: "@entities/**", group: "internal" },
            { pattern: "@shared/**", group: "internal" },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true }
        }
      ]
    },
  },
]);
