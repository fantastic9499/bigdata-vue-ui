/*
 * @Author: TuXunJia
 * @Date: 2024-12-29 16:29:26
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-01 16:48:05
 * @Description: 
 */
import {createApp} from 'vue'
import App from './app.vue'
import bdlib from '@yf-bigdata/vue-ui';

const app = createApp(App)

app.use(bdlib);

app.mount('#app')
