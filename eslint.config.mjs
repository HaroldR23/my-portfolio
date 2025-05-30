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
      indent: ["error", 2], // Enforce 2-space indentation
      "max-len": ["error", { code: 100 }], // Enforce a maximum line length of 100 characters
      
    },
  }
];

export default eslintConfig;
