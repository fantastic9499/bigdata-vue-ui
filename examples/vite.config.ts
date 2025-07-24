/*
 * @Author: TuXunJia
 * @Date: 2024-12-29 16:22:35
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-24 10:44:19
 * @Description:
 */
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // modifyVars: {
        //   hack: `true; @import "${path.resolve(
        //     __dirname,
        //     '.',
        //     'src/assets/style/core/index.less',
        //   )}";`,
        // },
        modifyVars: {
          hack: `true; @import "@pluve/antd-rest/dist/style/antd-rest.compact.var.less"`,
        },
      },
    },
  },
});
