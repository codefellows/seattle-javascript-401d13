'use strict';

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const Promise = require('bluebird');
const debug = require('debug')('note:server');

const listRouter = require('./route/list-route.js');
const noteRouter = require('./route/note-route.js');
const errors = require('./lib/error-middleware.js');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/note';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(listRouter);
app.use(noteRouter);
app.use(errors);

app.listen(PORT, () => {
  debug(`server up: ${PORT}`);
});
