'use strict';

const mongoose = require('mongoose');
const createError = require('http-errors');
const debug = require('debug')('note:list');
const Schema = mongoose.Schema;

const Note = require('./note.js');

const listSchema = Schema({
  name: { type: String, required: true },
  timestamp: { type: Date, required: true },
  notes: [{ type: Schema.Types.ObjectId, ref: 'note' }]
});

const List = module.exports = mongoose.model('list', listSchema);

List.findByIdAndAddNote = function(id, note) {
  debug('findByIdAndAddNote');

  return List.findById(id)
  .catch( err => Promise.reject(createError(404, err.message)))
  .then( list => {
    note.listID = list._id;
    this.tempList = list;
    return new Note(note).save();
  })
  .then( note => {
    this.tempList.notes.push(note._id);
    this.tempNote = note;
    return this.tempList.save();
  })
  .then( () => {
    return this.tempNote;
  });
};
