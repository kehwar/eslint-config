import { createEslintConfig } from "../../utils";

export const getJsoncConfig = createEslintConfig({
    rules: {
        "jsonc/indent": ["error", 4],
    },
});
