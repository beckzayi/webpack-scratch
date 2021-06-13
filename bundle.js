/**
 * 模块分析, 读取入口文件, 分析代码
 *
 * 拿到文件中依赖, 这里不推荐使用字符串截取, 引入的模块名越多, 就越麻烦.
 * 推荐使用 @babel/parser, 来帮助分析内部语法, 返回一个AST抽象语法树
 */
const fs = require('fs');
const parser = require('@babel/parser');

const entry = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = parser.parse(content, {
    sourceType: 'module',
  });
  return ast.program.body;
};

const info = entry('./src/index.js');
console.log(info);
