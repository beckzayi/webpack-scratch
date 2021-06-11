/**
 * Implement AMD 'define' and 'require'
 */

// an object that contains pairs of module name and its factory function
let factories = {};

/**
 * Define a module which relates a factory function
 * @param {string} moduleName
 * @param {array} dependencies
 * @param {function} factory
 */
function define(moduleName, dependencies, factory) {
  factories[moduleName] = factory;
}

/**
 * Run the callback function, and its arguments come from the return value of the module's factory function
 * @param {array} modules
 * @param {function} callback
 */
function require(modules, callback) {
  let args = modules.map(function (module) {
    let factory = factories[module];
    return factory();
  });
  callback.apply(null, args);
}

define('name', [], function () {
  return 'John Doe';
});

define('age', [], function () {
  return 9;
});

require(['name', 'age'], function (name, age) {
  console.log(name, age);
});
