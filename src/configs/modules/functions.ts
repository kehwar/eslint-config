import { createEslintConfig } from "../../utils";

export const getFunctionsConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://eslint.org/docs/latest/rules/arrow-parens */
        "arrow-parens": ["error", "always"],

        /** @see https://typescript-eslint.io/rules/func-call-spacing */
        "@typescript-eslint/func-call-spacing": ["error", "never"],
        "func-call-spacing": "off",

        /** @see https://typescript-eslint.io/rules/space-before-function-paren */
        "@typescript-eslint/space-before-function-paren": "error",
        "space-before-function-paren": "off",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md */
        "unicorn/no-array-callback-reference": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md */
        "unicorn/prefer-number-properties": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md */
        "unicorn/prefer-string-slice": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md */
        "unicorn/consistent-function-scoping": ["error", { checkArrowFunctions: false } ],

        /** @see https://github.com/antfu/eslint-config/blob/main/packages/eslint-plugin-antfu/src/rules/top-level-function.test.ts */
        "antfu/top-level-function": "error",
    },
});
