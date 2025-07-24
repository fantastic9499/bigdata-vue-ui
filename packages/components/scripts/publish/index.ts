/*
 * @Author: TuXunJia
 * @Date: 2025-01-02 20:23:54
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-23 12:11:30
 * @Description: 发布到npm
 */
import { series } from 'gulp';
import { pkgPath } from '../utils/paths';
import run from '../utils/run';
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/vue-ui`);
};
export default series(async () => publishComponent());
