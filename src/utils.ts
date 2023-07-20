import type { Linter } from "@typescript-eslint/utils/dist/ts-eslint";

export const createEslintConfig = (config: Linter.Config) => () => config;
