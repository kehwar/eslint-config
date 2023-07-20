import { mergeWith, isArray } from "lodash";
import { getArraysConfig } from "./modules/arrays";
import { getBlocksConfig } from "./modules/blocks";
import { getCommentsConfig } from "./modules/comments";
import { getConditionalsConfig } from "./modules/conditionals";
import { getDeclarationsConfig } from "./modules/declarations";
import { getEditorConfig } from "./modules/editor";
import { getErrorsConfig } from "./modules/errors";
import { getExtensionsConfig } from "./modules/extensions";
import { getFilesConfig } from "./modules/files";
import { getFunctionsConfig } from "./modules/functions";
import { getImportsConfig } from "./modules/imports";
import { getLodashConfig } from "./modules/lodash";
import { getPluginsConfig } from "./modules/plugins";
import { getPromisesConfig } from "./modules/promises";
import { getRegexConfig } from "./modules/regex";
import { getSonartConfig } from "./modules/sonar";
import { getStoryblockConfig } from "./modules/storyblock";
import { getStyleConfig } from "./modules/style";
import { getTailwindConfig } from "./modules/tailwind";
import { getTestsConfig } from "./modules/tests";
import { getVueConfig } from "./modules/vue";
import type { Linter } from "@typescript-eslint/utils/dist/ts-eslint";

export function getNuxtConfigPreset () {
    return mergeWith(
        getPluginsConfig(),
        getExtensionsConfig(),
        getArraysConfig(),
        getBlocksConfig(),
        getCommentsConfig(),
        getConditionalsConfig(),
        getDeclarationsConfig(),
        getEditorConfig(),
        getErrorsConfig(),
        getFilesConfig(),
        getFunctionsConfig(),
        getImportsConfig(),
        getLodashConfig(),
        getPromisesConfig(),
        getRegexConfig(),
        getSonartConfig(),
        getStoryblockConfig(),
        getStyleConfig(),
        getTailwindConfig(),
        getTestsConfig(),
        getVueConfig(),
        (objValue, srcValue) => isArray(objValue) ? objValue.concat(srcValue) : undefined
    ) as Linter.Config;
}
