/*
 * @Author: TuXunJia
 * @Date: 2024-12-29 17:00:41
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-24 16:59:45
 */
import { App } from 'vue';
import type { IButtonProps } from './button';
import Button from './button';
// import type { ITableSettingsModalProps } from './table-settings-modal';
import {
  default as TableSettingsModal,
  type ITableSettingsModalProps,
} from './table-settings-modal';

export { Button, IButtonProps, ITableSettingsModalProps, TableSettingsModal };

export default {
  install: (app: App) => {
    app.use(Button);
    app.use(TableSettingsModal);
    // for (const c in components) {
    //   app.use(components[c]);
    // }
  },
};
