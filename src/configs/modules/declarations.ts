import { createEslintConfig } from "../../utils";

export const getDeclarationsConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://eslint.org/docs/latest/rules/no-use-before-define */
        "no-use-before-define": "off",

        /** @see https://eslint.org/docs/latest/rules/camelcase */
        "camelcase": [
            "error",
            {
                allow: ["^UNSAFE_", "^U_", "^_", "^__"],
                properties: "never",
                ignoreGlobals: true,
                ignoreDestructuring: false,
                ignoreImports: false,
            },
        ],

        /** @see https://eslint.org/docs/latest/rules/prefer-const */
        "prefer-const": [
            "error",
            {
                destructuring: "all",
                ignoreReadBeforeAssign: false,
            },
        ],

        /** @see https://typescript-eslint.io/rules/no-unused-vars */
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                args: "all",
                argsIgnorePattern: "^_",
                vars: "all",
                varsIgnorePattern: "^_",
            },
        ],
        "no-unused-vars": "off",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md */
        "unicorn/prefer-date-now": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md */
        "unicorn/numeric-separators-style": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md */
        "unicorn/new-for-builtins": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md */
        "unicorn/consistent-destructuring": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md */
        "unicorn/no-useless-undefined": "error",

        /** @see https://eslint.org/docs/latest/rules/no-multi-assign */
        "no-multi-assign": "error",
    },
});
