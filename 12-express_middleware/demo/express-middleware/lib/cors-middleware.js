'use strict';

module.exports = function(req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Headers', '*');
  next();
};
