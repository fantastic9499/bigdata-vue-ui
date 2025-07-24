/*
 * @Author: TuXunJia
 * @Date: 2024-12-29 17:32:11
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-24 17:44:56
 */
import { ExtractPropTypes } from 'vue';

export const ButtonType = [
  'default',
  'primary',
  'success',
  'warning',
  'danger',
];

export const ButtonSize = ['large', 'normal', 'small', 'mini'];

export const buttonProps = {
  type: {
    type: String,
    values: ButtonType,
  },
  size: {
    type: String,
    values: ButtonSize,
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
