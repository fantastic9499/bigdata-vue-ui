/*
 * @Author: TuXunJia
 * @Date: 2024-12-29 16:49:17
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-03 17:27:02
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
import * as components from './src/index';
export * from './src/index';
import { App } from 'vue';

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use(components[c]);
    }
  }
};
