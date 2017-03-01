'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const List = require('../model/list.js');
const listRouter = module.exports = new Router();

listRouter.post('/api/list', jsonParser, function(req, res, next) {
  req.body.timestamp = new Date();
  new List(req.body).save()
  .then(list => res.json(list))
  .catch(next);
});

listRouter.get('/api/list/:id', function(req, res, next) {
  List.findById(req.params.id)
  .then(list => res.json(list))
  .catch(next);
});
