'use strict';
const mongoose = require('mongoose');
const config = require('config');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

const mongoUri = `mongodb://localhost:27017/soccerManagerDB`;

mongoose.connect(mongoUri, options)
    .then(() => { console.log('successfully connected to the database'); })
    .catch(err => { console.log(`error connecting to the database: ${err}`); });