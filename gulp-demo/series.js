/*
 * @Author: TuXunJia
 * @Date: 2025-01-01 22:07:29
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-01 22:07:30
 * @Description: 
 */
const { series, parallel } = require("gulp");

const task1 = () => {
  console.log("task1");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};
const task2 = () => {
  console.log("task2");
  return Promise.resolve();
};

exports.default = series(task1, task2);

