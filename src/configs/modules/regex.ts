import { createEslintConfig } from "../../utils";

export const getRegexConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md */
        "unicorn/better-regex": ["error", { sortCharacterClasses: false } ],
    },
});
