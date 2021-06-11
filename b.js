const fs = require('fs');

/**
 * Implement CommonJS 'require'
 * @param {string} moduleName
 * @returns function
 */
function req(moduleName) {
  let content = fs.readFileSync(moduleName);
  let fn = new Function(
    'exports',
    'module',
    '__dirname',
    '__filename',
    content + '\n return module.exports'
  );

  let module = {
    exports: {},
  };

  /**
   * function (exports, module, __dirname, __filename) {
   *    // content + '\n return module.exports'
   *    module.exports = 'Welcome';
   *    return module.exports;
   * }
   */
  return fn(module.exports, module, __dirname, __filename);
}

let str = req('./a.js');

console.log(str);
