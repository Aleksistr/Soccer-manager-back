const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema ({
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  nbPlayers: {
    type: Number,
    required: true
  },
  nbPlayersWaitingList: {
    type: Number,
    required: true
  },
  waitingList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Payer"
    }
  ],
  composition: {
    type: Schema.Types.ObjectId,
    ref: "Compo"
  },
  finished: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = matchSchema;