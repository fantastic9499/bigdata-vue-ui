/*
 * @Author: TuXunJia
 * @Date: 2025-01-03 15:50:12
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-10 17:43:38
 * @Description:
 */
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  prettierConfig,
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  { ignores: ['**.d.ts', 'packages/vue-ui', '**/dist/*', '**/node_modules/'] },
];
