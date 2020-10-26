const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compoSchema = new Schema({
  teamOne: {
    type: Schema.Types.ObjectId,
    ref: "MatchTeam",
    required: true
  },
  teamTwo: {
    type: Schema.Types.ObjectId,
    ref: "MatchTeam",
    required: true
  },
  winner: {
    type: String,
    required: true
  }
});

module.exports = compoSchema;