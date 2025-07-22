/*
 * @Author: TuXunJia
 * @Date: 2025-01-03 10:05:59
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-02-16 23:25:36
 * @Description:
 */
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin';

export default {
  base: process.env.NODE_ENV === 'production' ? '/vue-ui-docs/' : '/',
  vue: {
    template: {
      compilerOptions: {
        // isCustomElement: (tag) => tag.startsWith('bd-')
      },
    },
  },
  vite: {
    // 添加 vite 配置
    // ssr: {
    //   noExternal: ['@yf-bigdata/vue-ui']
    // }
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
      /**
       * SSR Compatibility
       * @link https://vitepress.dev/guide/ssr-compat
       * If the components are not SSR-friendly, you can specify the clientOnly to disable SSR.
       */
      // md.use(containerPreview, { clientOnly: true })
      // md.use(componentPreview, { clientOnly: true })
    },
  },
  themeConfig: {
    siteTitle: '益丰大数据组件库',
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/components/button/basic' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/fantastic9499/yf-bigdata-vue-ui.git',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guide/',
            },
            {
              text: '快速开始',
              link: '/guide/quickstart',
            },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button',
              link: '/components/button/basic',
            },
          ],
        },
      ],
    },
  },
};
