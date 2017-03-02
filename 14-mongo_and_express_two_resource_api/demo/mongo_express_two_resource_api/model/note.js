'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  listID: { type: Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model('note', noteSchema);
