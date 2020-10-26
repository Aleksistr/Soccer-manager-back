const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchTeamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  butScored: {
    type: Number,
    required: true
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      required: true
    }
  ]
});

module.exports = matchTeamSchema; 