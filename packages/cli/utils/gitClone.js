/*
 * @Author: TuXunJia
 * @Date: 2025-01-05 18:44:38
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-05 19:08:02
 * @Description:
 */
import downloadGitRepo from 'download-git-repo';
import chalk from 'chalk';
import ora from 'ora';

export default (remote, name, option) => {
  console.log(chalk.blue('开始下载模板...'));
  const downSpinner = ora('正在下载模板...').start();
  return new Promise((resolve, reject) => {
    downloadGitRepo(remote, name, option, (err) => {
      if (err) {
        downSpinner.fail();
        console.log('err', chalk.red(err));
        reject(err);
        return;
      }
      downSpinner.succeed(chalk.green('模板下载成功！'));
      console.log(chalk.green(`cd ${name}\r\n`));
      console.log(chalk.blue('pnpm install\r\n'));
      console.log('pnpm run build:vue-ui\r\n');
      console.log('pnpm run easyest:dev\r\n');
      resolve();
    });
  });
};
