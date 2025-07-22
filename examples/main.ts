/*
 * @Author: TuXunJia
 * @Date: 2024-12-29 16:29:26
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-01 16:48:05
 * @Description:
 */
import bdlib from '@yf-bigdata/vue-ui';
import { createApp } from 'vue';
import App from './app.vue';

const app = createApp(App);

app.use(bdlib);

app.mount('#app');
