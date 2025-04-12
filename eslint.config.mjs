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
    files: ["src/**/*.tsx", "src/**/*.ts"],
    ignores: ["src/components/ui/**"],
    rules: {
      "react/jsx-max-props-per-line": [1, { "maximum": 1 }],
      "react/jsx-closing-bracket-location": [1, "after-props"],
      "react/jsx-first-prop-new-line": [1, "multiprop"],
      "semi": ["error", "never"],
      "quotes": ["error", "single"],
      "@typescript-eslint/no-explicit-any": "off",
    }
  }
];

export default eslintConfig;
