import { link } from "fs";

/*
 * @Author: TuXunJia
 * @Date: 2025-01-03 10:05:59
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-03 14:11:04
 * @Description: 
 */
export default {
  base: process.env.NODE_ENV === 'production' ? '/vue-ui-docs/' : '/',
  vue: {
      template: {
        compilerOptions: {          
          // isCustomElement: (tag) => tag.startsWith('bd-')
        }
      }
  },
  vite: {
      // 添加 vite 配置
      // ssr: {
      //   noExternal: ['@yf-bigdata/vue-ui']
      // }
    },    
  themeConfig: {
    siteTitle: "益丰大数据组件库",
    nav: [
      { text: "指南", link: "/guide" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/fantastic9499/yf-bigdata-vue-ui.git" },
    ],
    sidebar: {
      "/guide/": [        
          {
              text: "基础",
              items: [
                  {
                      text: "安装",
                      link: "/guide/",
                  },
                  {
                      text: "快速开始",
                      link: '/guide/quickstart',
                  }
              ]
          },
      ],
      "/components/": [
          {
              text: '基础组件',
              items: [
                  {
                      text: 'Button',
                      link: '/components/button',
                  }
              ]
          },
      ]
    }      
  },
};
  