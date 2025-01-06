/*
 * @Author: TuXunJia
 * @Date: 2025-01-02 10:54:32
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-06 11:43:58
 * @Description:
 */
import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';

//删除dist
export const removeDist = () => {
  return delPath(`${pkgPath}/vue-ui`);
};

//打包样式
export const buildStyle = () => {
  return (
    src(`${componentPath}/src/**/style/**.less`)
      .pipe(less())
      // .pipe(autoprefixer())
      .pipe(
        autoprefixer({
          // @ts-ignore 添加配置选项
          overrideBrowserslist: ['> 1%', 'last 2 versions'],
          // overrideBrowserslist: [
          //   'last 2 versions',
          //   '> 1%',
          //   'not dead'
          // ],
          cascade: false,
        }),
      )
      .pipe(dest(`${pkgPath}/vue-ui/lib/src`))
      .pipe(dest(`${pkgPath}/vue-ui/es/src`))
  );
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    // async () => buildStyle(),
    async () => buildComponent(),
  ),
);
