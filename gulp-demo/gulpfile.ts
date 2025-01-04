/*
 * @Author: TuXunJia
 * @Date: 2025-01-01 23:10:13
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-02 14:43:31
 * @Description: 
 */
import gulp, { series } from 'gulp';
const { src, dest } = gulp;
import browserSync, { watch } from 'browser-sync';
// const { watch } = require("browser-sync");
// const browserSync = require("browser-sync");
// const { series } = require("gulp");
// const less = require("gulp-less");
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
// const autoprefixer = require("gulp-autoprefixer");

const lessTask = () => {
  return src("src/style/*.less")
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false, //  是否美化属性值
      })
    )
    .pipe(dest("dist/style"));
};

//页面刷新
const reloadTask = () => {
  browserSync.reload();
};

const browserTask = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*.html", series(reloadTask));
  //监听样式更新触发两个任务
  watch("src/style/*", series(lessTask, reloadTask));
};

// exports.default = browserTask;
export default browserTask;
