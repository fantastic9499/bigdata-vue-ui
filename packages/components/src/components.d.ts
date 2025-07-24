/*
 * @Author: TuXunJia
 * @Date: 2025-01-01 17:47:24
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-24 18:02:53
 * @Description:
 */
import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BdButton: typeof components.Button;
    TableSettingsModal: typeof components.TableSettingsModal;
    // EaIcon: typeof components.Icon;
  }
}
// export {};
