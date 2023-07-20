import { createEslintConfig } from "../../utils";

export const getVueConfig = createEslintConfig({
    /** Rules */
    rules: {
        /** @see https://eslint.vuejs.org/rules/component-tags-order.html */
        "vue/component-tags-order": [
            "error",
            {
                order: ["script", "template", "style"],
            },
        ],

        // Vue - Script

        /** @see https://eslint.vuejs.org/rules/component-api-style.html */
        "vue/component-api-style": ["error", ["script-setup"] ],

        /** @see https://eslint.vuejs.org/rules/block-lang.html */
        "vue/block-lang": [
            "error",
            {
                script: {
                    lang: "ts",
                },
            },
        ],

        /** @see https://eslint.vuejs.org/rules/define-macros-order.html */
        "vue/define-macros-order": [
            "error",
            {
                order: ["defineProps", "defineEmits"],
            },
        ],

        /** @see https://eslint.vuejs.org/rules/define-props-declaration.html */
        "vue/define-props-declaration": ["error", "type-based"],

        /** @see https://eslint.vuejs.org/rules/define-emits-declaration.html */
        "vue/define-emits-declaration": ["error", "type-based"],

        /** @see https://eslint.vuejs.org/rules/custom-event-name-casing.html */
        "vue/custom-event-name-casing": [
            "error",
            "camelCase",
            {
                ignores: [],
            },
        ],

        // Vue - Template

        /** @see https://eslint.vuejs.org/rules/html-indent.html */
        "vue/html-indent": ["error", 4],

        /** @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html */
        "vue/component-name-in-template-casing": [
            "error",
            "PascalCase",
            {
                registeredComponentsOnly: true,
                ignores: [],
            },
        ],

        /** @see https://eslint.vuejs.org/rules/html-self-closing.html */
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "never",
                    normal: "always",
                    component: "always",
                },
                svg: "always",
                math: "always",
            },
        ],

        /** @see https://eslint.vuejs.org/rules/eqeqeq.html */
        "vue/eqeqeq": ["error", "always", { null: "ignore" } ],

        /** @see https://eslint.vuejs.org/rules/attributes-order.html */
        "vue/attributes-order": [
            "error",
            {
                order: [
                    "DEFINITION",
                    "LIST_RENDERING",
                    "CONDITIONALS",
                    "RENDER_MODIFIERS",
                    "GLOBAL",
                    ["UNIQUE", "SLOT"],
                    "TWO_WAY_BINDING",
                    "OTHER_DIRECTIVES",
                    "OTHER_ATTR",
                    "EVENTS",
                    "CONTENT",
                ],
                alphabetical: true,
            },
        ],
    },
});
