'use strict';

module.exports = exports = {};

exports.sayHey = function(name) {
  if (arguments.length === 0) throw new Error('name not provided');
  console.log(`hey ${name}!`);
};

exports.sayBye = function() {
  console.log('see ya later!');
};

