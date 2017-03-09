// DEPLOYMENT TEST

'use strict';

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const debug = require('debug')('cfgram:server');

const picRouter = require('./route/pic-router.js');
const authRouter = require('./route/auth-router.js');
const galleryRouter = require('./route/gallery-router.js');
const errors = require('./lib/error-middleware.js');

dotenv.load();

const PORT = process.env.PORT;
const app = express();

mongoose.connect(process.env.MONGODB_URI);

let morganFormat = process.env.PRODUCTION ? 'common' : 'dev'

app.use(cors());
app.use(morgan(morganFormat));

app.use(picRouter);
app.use(authRouter);
app.use(galleryRouter);
app.use(errors);

const server = module.exports = app.listen(PORT, () => {
  debug(`server up: ${PORT}`);
});

server.isRunning = true;
