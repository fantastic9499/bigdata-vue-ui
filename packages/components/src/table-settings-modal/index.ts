/*
 * @Author: TuXunJia
 * @Date: 2025-07-23 16:06:19
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-24 17:14:21
 */
import { withInstall } from '../utils';
import tableSettingsModal from './index.vue';

const TableSettingsModal = withInstall(tableSettingsModal);
export default TableSettingsModal;
export type { ITableSettingsModalProps } from './index.vue';
