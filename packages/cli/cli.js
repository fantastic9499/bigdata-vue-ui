/*
 * @Author: TuXunJia
 * @Date: 2025-01-05 17:47:53
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-05 21:23:47
 * @Description:
 */
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import prompts from 'prompts';
import { readFile } from 'fs/promises';
import gitClone from './utils/gitClone.js';

// console.log('import.meta.url:', import.meta.url);
// console.log('RUL:', JSON.stringify(new URL('./package.json', import.meta.url)));

const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url)),
);

// console.log('pkg:', pkg);

// 配置命令参数
const optionDefinitions = [
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'version', alias: 'v', type: Boolean },
  //   { name: 'watch', alias: 'w', type: Boolean },
  //   { name: 'config', alias: 'c', type: String },
];

// 帮助命令
const helpSections = [
  {
    header: 'create-bigdata-vue-ui',
    content: '快速生成组件库的脚手架',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'help',
        alias: 'h',
        typeLabel: '{underline boolean}',
        description: '帮助',
      },
      {
        name: 'version',
        alias: 'v',
        typeLabel: '{underline boolean}',
        description: '版本号',
      },
    ],
  },
];

const options = commandLineArgs(optionDefinitions);
if (options.version) {
  console.log(`v${pkg.version}`);
  process.exit(0);
}

if (options.help) {
  console.log(commandLineUsage(helpSections));
  process.exit(0);
}

const promptsOptions = [
  {
    type: 'text',
    name: 'name',
    message: '请输入项目名称',
  },
  {
    type: 'select', // 单选
    name: 'template',
    message: '请选择一个模板',
    choices: [
      { title: 'bigdata-vue-ui', value: 1 },
      { title: 'vue-ui', value: 2 },
    ],
  },
];

const remoteList = {
  1: 'https://github.com/fantastic9499/bigdata-vue-ui.git',
  2: 'https://github.com/fantastic9499/bigdata-vue-ui.git',
};

const getUserInfo = async () => {
  const res = await prompts(promptsOptions);
  console.log(res);
  if (!res.name || !res.template) {
    return;
  }
  //   gitClone(`direct:${remoteList[res.template]}`, res.name, { clone: true });
  try {
    await gitClone(`direct:${remoteList[res.template]}`, res.name, {
      clone: true,
    });
  } catch (error) {
    console.error('克隆模板时出错:', error);
  }
};
getUserInfo();
