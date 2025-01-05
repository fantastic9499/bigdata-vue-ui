/*
 * @Author: TuXunJia
 * @Date: 2025-01-01 23:00:42
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-01 23:00:44
 * @Description: 
 */
/*
 * @Author: TuXunJia
 * @Date: 2025-01-01 22:01:52
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-01 22:59:58
 * @Description: 打包less文件，拷贝到指定目录
 */
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import less from 'gulp-less';

const { src, dest } = gulp;

const lessTask = () => {
  return src("src/style/*.less").pipe(less()).pipe(
    autoprefixer({
      overrideBrowserslist: ["> 1%", "last 2 versions"],
      cascade: false, //  是否美化属性值
    })
  ).pipe(dest("dist/style"));
};

export default lessTask;

