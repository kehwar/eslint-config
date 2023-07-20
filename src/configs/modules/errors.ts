import { createEslintConfig } from "../../utils";

export const getErrorsConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md */
        "unicorn/catch-error-name": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md */
        "unicorn/prefer-optional-catch-binding": "error",
    },
});
