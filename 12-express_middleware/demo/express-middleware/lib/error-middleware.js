'use strict';

const createError = require('http-errors');
const debug = require('debug')('note:error-middleware');

module.exports = function(err, req, res, next) {
  console.error(err.message);

  if (err.status) {
    debug('user error');

    res.status(err.status).send(err.name);
    next();
    return;
  }

  debug('server error');
  err = createError(500, err.message);
  res.status(err.status).send(err.name);
  next();
};
