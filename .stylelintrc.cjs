/*
 * @Author: TuXunJia
 * @Date: 2025-01-03 18:06:21
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-03 18:12:54
 * @Description:
 */
module.exports = {
  // 注册 stylelint 的 prettier 插件
  plugins: ['stylelint-prettier'],
  // 继承一系列规则集合
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    'stylelint-config-recommended-less',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
    // 接入 Prettier 规则
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  // 配置 rules
  rules: {
    // 开启 Prettier 自动格式化功能
    'prettier/prettier': true,
  },
};
