/*
 * @Author: TuXunJia
 * @Date: 2025-01-02 20:23:54
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-04 23:07:33
 * @Description:
 */
import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/vue-ui`);
};
export default series(async () => publishComponent());
