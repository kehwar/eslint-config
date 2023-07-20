import { createEslintConfig } from "../../utils";

export const getBlocksConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://typescript-eslint.io/rules/brace-style */
        "@typescript-eslint/brace-style": ["error", "stroustrup", { allowSingleLine: false } ],
        "brace-style": "off",

        /** @see https://eslint.org/docs/latest/rules/curly */
        "curly": ["error", "multi-line"],
    },
});
