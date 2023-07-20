import { createEslintConfig } from "../../utils";

export const getPluginsConfig = createEslintConfig({
    plugins: [
        "antfu", // https://github.com/antfu/eslint-config/tree/main/packages/eslint-plugin-antfu
        "consistent-default-export-name", // https://github.com/minseoksuh/eslint-plugin-consistent-default-export-name
        "editorconfig", // https://github.com/phanect/eslint-plugin-editorconfig
        "jsdoc", // https://github.com/gajus/eslint-plugin-jsdoc
        "lodash", // https://github.com/wix-incubator/eslint-plugin-lodash
        "promise", // https://github.com/eslint-community/eslint-plugin-promise
        "sonarjs", // https://github.com/SonarSource/eslint-plugin-sonarjs
        "tailwindcss", // https://github.com/francoismassart/eslint-plugin-tailwindcss
        "unicorn", // https://github.com/sindresorhus/eslint-plugin-unicorn
    ],
});
