import { createEslintConfig } from "../../utils";

export const getConditionalsConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-ternary.md */
        "unicorn/prefer-ternary": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md */
        "unicorn/no-lonely-if": "error",

        /** @see https://eslint.org/docs/latest/rules/operator-linebreak */
        "operator-linebreak": ["error", "before"],

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md */
        "unicorn/switch-case-braces": ["error", "always"],
    },
});
