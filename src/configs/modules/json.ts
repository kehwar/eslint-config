import { createEslintConfig } from "../../utils";

export const getLodashConfig = createEslintConfig({
    rules: {
        "jsonc/indent": ["error", 2],
    },
});
