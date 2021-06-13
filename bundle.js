/**
 * 模块分析, 读取入口文件, 分析代码
 */
const fs = require('fs');

const entry = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8');
  return content;
};

const info = entry('./src/index.js');
console.log(info);
