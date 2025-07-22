/*
 * @Author: TuXunJia
 * @Date: 2025-01-03 15:50:12
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-22 22:12:57
 * @Description:
 */
import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

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
