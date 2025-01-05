/*
 * @Author: TuXunJia
 * @Date: 2024-12-29 17:01:27
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-04 22:39:44
 * @Description:
 */
import type { App, Plugin, Component } from 'vue';
import type { IButtonProps } from './button.vue';
import button from './button.vue';

type SFCWithInstall<T> = T & Plugin;

const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    app.component((component as any).name, component as Component);
  };
  return component as SFCWithInstall<T>;
};

const Button = withInstall(button);
export default Button;
export { IButtonProps };

const a = 2;
