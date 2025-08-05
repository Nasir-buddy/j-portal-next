import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // TypeScript specific rules - keep important ones as warnings
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/prefer-const": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      
      // General code quality rules - warnings instead of errors
      "no-unused-vars": "error", // Turn off base rule as it conflicts with TypeScript version
      "no-console": "warn",
      "no-debugger": "warn",
      "no-alert": "warn",
      
      // React specific rules
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error", // Keep this as error for React safety
      "react/no-unescaped-entities": "warn",
      
      // Code style - more flexible
      "prefer-const": "warn",
      "no-var": "warn",
      "no-multiple-empty-lines": "warn",
      "no-trailing-spaces": "warn",
      "eol-last": "warn",
    },
  },
];

export default eslintConfig;
