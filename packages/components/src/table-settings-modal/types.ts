/*
 * @Author: TuXunJia
 * @Date: 2025-07-23 16:06:31
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-24 18:06:22
 */
import { ExtractPropTypes } from 'vue';

export const tableSettingsModalProps = {
  type: {
    type: Array<{ name: string; isShow: boolean }>,
  },
};

export type ITableSettingsModalProps = ExtractPropTypes<
  typeof tableSettingsModalProps
>;
