const mongoose = require('mongoose');
const playerSchema = require('./PlayerSchema');
const Player = mongoose.model('player', playerSchema);
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "player"
    }
  ]
});

/**
 * Auto populate fields
 */

const autoPopulatePlayers = function (next) {
  this.populate('players');
  next();
}

teamSchema.
  pre('findOne', autoPopulatePlayers).
  pre('find', autoPopulatePlayers);

module.exports = teamSchema;