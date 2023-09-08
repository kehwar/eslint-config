import { createEslintConfig } from "../../utils";

export const getImportsConfig = createEslintConfig({
    rules: {

        /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md */
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", "unknown", "parent", "index", "sibling", "object", "type"],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],

        /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md */
        "import/newline-after-import": ["error", { considerComments: false } ],

        /** @see https://eslint.org/docs/latest/rules/no-restricted-imports */
        "no-restricted-imports": [
            "error",
            {
                // Dayjs must be used through the dayjs facade to use the correct locale and plugins
                name: "dayjs",
                message: "Use dayjs facade instead.",
            },
        ],

        /** @see https://github.com/minseoksuh/eslint-plugin-consistent-default-export-name/blob/main/docs/rules/default-import-match-filename.md */
        "consistent-default-export-name/default-import-match-filename": [
            "error",
            {
                ignorePaths: ["**/*.sql"],
            },
        ],

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-node-protocol.md */
        "unicorn/prefer-node-protocol": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md */
        "unicorn/prefer-export-from": ["error", { ignoreUsedVariables: true } ],

        /** @see https://typescript-eslint.io/rules/consistent-type-imports */
        "@typescript-eslint/consistent-type-imports": "error",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md */
        "unicorn/prefer-module": "error",
    },

    overrides: [
        /** Override for common Javascript files */
        {
            files: ["*.js", "*.cjs"],
            rules: {
                /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md */
                "unicorn/prefer-module": "off",

                /** @see https://typescript-eslint.io/rules/no-var-requires */
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],

    settings: {
        /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md#settings */
        "import/ignore": ["lodash"],
    },
});
