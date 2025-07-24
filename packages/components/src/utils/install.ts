/*
 * @Author: TuXunJia
 * @Date: 2025-07-24 17:06:21
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-24 17:06:22
 */
import type { App, Component, Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    app.component((component as any).name, component as Component);
  };
  return component as SFCWithInstall<T>;
};
