import { createEslintConfig } from "../../utils";

export const getArraysConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://eslint.org/docs/latest/rules/array-bracket-newline */
        "array-bracket-newline": ["error", { multiline: true } ],

        /** @see https://eslint.org/docs/latest/rules/array-bracket-spacing */
        "array-bracket-spacing": [
            "error",
            "never",
            {
                singleValue: false,
                objectsInArrays: true,
                arraysInArrays: true,
            },
        ],

        /** @see https://eslint.org/docs/latest/rules/array-element-newline */
        "array-element-newline": ["error", "consistent"],

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md */
        "unicorn/no-new-array": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md */
        "unicorn/no-array-push-push": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md */
        "unicorn/no-array-reduce": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md */
        "unicorn/prefer-set-has": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md */
        "unicorn/explicit-length-check": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md */
        "unicorn/no-useless-fallback-in-spread": "error",
    },
});
