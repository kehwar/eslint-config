/* eslint-disable sonarjs/no-duplicate-string */
import { createEslintConfig } from "../../utils";

export const getStyleConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://typescript-eslint.io/rules/semi */
        "@typescript-eslint/semi": ["error", "always"],
        "semi": "off",

        /** @see https://typescript-eslint.io/rules/quotes */
        "@typescript-eslint/quotes": [
            "error",
            "double",
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        "quotes": "off",

        /** @see https://typescript-eslint.io/rules/comma-dangle */
        "@typescript-eslint/comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "never",
                enums: "always-multiline",
                generics: "never",
                tuples: "always-multiline",
            },
        ],
        "comma-dangle": "off",

        /** @see https://eslint.org/docs/latest/rules/comma-style */
        "comma-style": [
            "error",
            "last",
            {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                },
            },
        ],

        /** @see https://eslint.org/docs/latest/rules/quote-props */
        "quote-props": ["error", "consistent"],
    },
});
