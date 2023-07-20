import { createEslintConfig } from "../../utils";

export const getCommentsConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md */
        "jsdoc/multiline-blocks": [
            "error",
            {
                noZeroLineText: true,
                noFinalLineText: true,
            },
        ],

        /** @see https://eslint.org/docs/latest/rules/lines-around-comment */
        "@typescript-eslint/lines-around-comment": [
            "error",
            {
                beforeBlockComment: true,
                afterBlockComment: false,
                beforeLineComment: true,
                afterLineComment: false,
                allowBlockStart: true,
                allowObjectStart: true,
                allowArrayStart: true,
                allowClassStart: true,
                allowEnumStart: true,
                allowInterfaceStart: true,
                allowModuleStart: true,
                allowTypeStart: true,
                ignorePattern: "@ts.*",
            },
        ],
        "lines-around-comment": "off",
    },
});
