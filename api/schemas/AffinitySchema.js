const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AffinitySchema = new Schema ({
  matchPlayed: {
    type: Number,
    required: true
  },
  matchWin: {
    type: Number,
    required: true
  },
  player: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },
  affinityGrade: {
    type: Number,
    required: true
  }
});

module.exports = AffinitySchema;