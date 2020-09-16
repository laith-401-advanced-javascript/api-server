'use strict';
require('dotenv').config();
const serverModule = require('./lib/server.js');
const mongoose = require('mongoose');

const MONGOOSE_URL = process.env.MONGOOSE_URL;

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
//mongoose_url in the .env
mongoose.connect(MONGOOSE_URL, mongooseOptions);


serverModule.start();