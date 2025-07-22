/*
 * @Author: TuXunJia
 * @Date: 2024-12-29 16:49:17
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-22 19:36:15
 * @Description:
 */
// import { App } from 'vue';
// import * as components from './src';
// export * from './src';

// export default {
//     install: (app: App) => {
//         for(let c in components) {
//             app.use(components[c]);
//         }
//     }
// }
import { App } from 'vue';
import * as components from './src/index';
export * from './src/index';

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use(components[c]);
    }
  },
};
