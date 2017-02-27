'use strict';

const uuid = require('node-uuid');
const createError = require('http-errors');
const debug = require('debug')('note:note');
const storage = require('../lib/storage.js');

const Note = module.exports = function(name, content) {
  debug('note constructor');

  if (!name) throw createError(400, 'expected name');
  if (!content) throw createError(400, 'expected content');

  this.id = uuid.v1();
  this.name = name;
  this.content = content;
};

Note.createNote = function(_note) {
  debug('createNote');

  try {
    let note = new Note(_note.name, _note.content);
    return storage.createItem('note', note);
  } catch (err) {
    return Promise.reject(err);
  }
};

Note.fetchNote = function(id) {
  debug('fetch note');
  return storage.fetchItem('note', id);
};
