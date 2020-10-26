const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statsSchema = new Schema({
  winrate: {
    type: Number,
    required: true
  },
  matchsWin: {
    type: Number,
    required: true
  },
  matchsLoose: {
    type: Number,
    required: true
  },
  matchsEquality: {
    type: Number,
    required: true
  },
  goalScored: {
    type: Number,
    required: true
  },
  grade: {
    type: Number,
    required: true
  }
});

module.exports = statsSchema;