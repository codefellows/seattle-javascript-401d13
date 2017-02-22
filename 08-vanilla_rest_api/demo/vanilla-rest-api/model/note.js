'use strict';

const uuid = require('node-uuid');

module.exports = function(name, content) {
  if (!name) throw new Error('expected name');
  if (!content) throw new Error('expected content');

  this.id = uuid.v1();
  this.name = name;
  this.content = content;
};
