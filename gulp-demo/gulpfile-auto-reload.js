/*
 * @Author: TuXunJia
 * @Date: 2025-01-01 22:01:52
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-01 23:04:00
 * @Description: 打包less文件，拷贝到指定目录
 */
// const browserSync = require("browser-sync");
import browserSync, { watch } from 'browser-sync';

// const { watch } = require("browser-sync");
// const { series } = require("gulp");
import { series } from 'gulp'

const reloadTask = () => {
  browserSync.reload();
};

const browserTask = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*", series(reloadTask));
};

export default browserTask;


