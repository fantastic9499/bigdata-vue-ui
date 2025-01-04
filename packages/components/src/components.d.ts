/*
 * @Author: TuXunJia
 * @Date: 2025-01-01 17:47:24
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-01 17:53:54
 * @Description: 
 */
import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BdButton: typeof components.Button;
    // EaIcon: typeof components.Icon;
  }
}
// export {};

