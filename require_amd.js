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
  factory.dependencies = dependencies; // attach dependencies to the factory function
}

/**
 * Run the callback function, and its arguments come from the return value of the module's factory function
 * @param {array} modules
 * @param {function} callback
 */
function require(modules, callback) {
  let args = modules.map(function (module) {
    let factory = factories[module];
    let exports;
    let dependencies = factory.dependencies;
    require(dependencies, function () {
      exports = factory.apply(null, arguments);
    });
    return exports;
  });
  callback.apply(null, args);
}

define('address', [], function () {
  return 'North Sydney';
});

define('name', [], function () {
  return 'John Doe';
});

define('age', ['name', 'address'], function (name, address) {
  return name + 9 + address;
});

require(['age'], function (age) {
  console.log(age);
});
