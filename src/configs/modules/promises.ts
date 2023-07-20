import { createEslintConfig } from "../../utils";

export const getPromisesConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md */
        "unicorn/no-await-expression-member": "error",
    },
});
