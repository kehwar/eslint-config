import { createEslintConfig } from "../../utils";

export const getExtensionsConfig = createEslintConfig({
    extends: [
        "@nuxtjs/eslint-config-typescript", // https://github.com/nuxt/eslint-config
        "plugin:consistent-default-export-name/fixed", // https://github.com/minseoksuh/eslint-plugin-consistent-default-export-name
        "plugin:lodash/recommended", // https://github.com/wix-incubator/eslint-plugin-lodash
        "plugin:promise/recommended", // https://github.com/eslint-community/eslint-plugin-promise
        "plugin:tailwindcss/recommended", // https://github.com/francoismassart/eslint-plugin-tailwindcss
    ],
});
