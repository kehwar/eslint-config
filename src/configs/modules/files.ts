import { createEslintConfig } from "../../utils";

export const getFilesConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md */
        "unicorn/no-empty-file": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md */
        "unicorn/filename-case": ["error", { case: "kebabCase" } ],
    },

});
