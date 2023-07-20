import { createEslintConfig } from "../../utils";

export const getTestsConfig = createEslintConfig({
    /** Rule overrides */
    overrides: [
        {
            /** Allow console statements in test files */
            files: ["**/*.test.ts"],
            rules: {
                /**
                 * Allow console statements in test files
                 */
                "no-console": "off",
            },
        },
    ],
});
