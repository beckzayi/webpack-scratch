/**
 * Basic structure of the built script by Webpack
 */
(function (modules) {
  function __webpack_require__(moduleId) {
    var module = {
      exports: {},
    };
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_modules__
    );
    return module.exports;
  }
  return __webpack_require__('./src/index.js');
})({
  './src/index.js': function (module, exports) {
    eval("\r\nconsole.log('Welcome!');\n\n");
  },
});
