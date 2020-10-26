const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const availabilitySchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  hourBegin: {
    type: Number,
    required: true
  },
  hourEnd: {
    type: Number,
    required: true
  }
});

module.exports = availabilitySchema;