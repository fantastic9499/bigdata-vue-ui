/*
 * @Author: TuXunJia
 * @Date: 2024-12-29 17:01:27
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-24 17:11:34
 */
import { withInstall } from '../utils';
import button from './button.vue';

const Button = withInstall(button);

export default Button;
export type { IButtonProps } from './button.vue';
