import { createEslintConfig } from "../../utils";

export const getStoryblockConfig = createEslintConfig({
    /** Rule overrides */
    overrides: [
        /** Override for storyblok components */
        {
            files: ["storyblok/*.vue"],
            rules: {
                "vue/multi-word-component-names": "off",
            },
        },
    ],
});
