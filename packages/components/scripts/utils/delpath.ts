/*
 * @Author: TuXunJia
 * @Date: 2025-01-02 10:44:34
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-02 15:35:46
 * @Description: 
 */
import fs from "fs";
import { resolve } from "path";
import { pkgPath } from "./paths";
//保留的文件
const stayFile = ["package.json", "README.md"];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      const curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != "node_modules") await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path != `${pkgPath}/vue-ui`) fs.rmdirSync(path);
  }
};
export default delPath;