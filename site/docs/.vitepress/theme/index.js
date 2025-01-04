/*
 * @Author: TuXunJia
 * @Date: 2025-01-03 10:43:22
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-03 12:14:43
 * @Description: 
 */
import DefaultTheme from "vitepress/theme";
import bigdata from "@yf-bigdata/vue-ui";
// import { Button } from '@yf-bigdata/vue-ui';
// 添加样式导入
import '@yf-bigdata/vue-ui/lib/src/button/style/index.css';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    console.log('app:', app);
    console.log('bigdata output:', bigdata);
    app.use(bigdata);
    console.log('手动注册后的组件列表:', app._context.components);
    // app.component('bd-button', Button);
  },
};
