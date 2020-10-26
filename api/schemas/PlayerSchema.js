const mongoose = require('mongoose');
const saltRounds = 10;
const bcrypt = require('bcrypt');
const availabiilitySchema = require('./AvailabilitySchema');
const Availabiility = mongoose.model('availability', availabiilitySchema);
const affinitySchema = require('./AffinitySchema');
const Affinity = mongoose.model('affinity', affinitySchema);
const statsSchema = require('./StatsSchema');
const Stats = mongoose.model('stats', statsSchema);
const Schema = mongoose.Schema;

const playerSchema = new Schema ({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  pseudo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  affinities: [
    {
      type: Schema.Types.ObjectId,
      ref: "affinity"
    }
  ],
  role: {
    type: String,
    required: true,
    default: 'Player'
  },
  availlabilityPlanning: [
    {
      type: Schema.Types.ObjectId,
      ref: "availability"
    }
  ],
  stats: {
    type: Schema.Types.ObjectId,
    ref: "stats"
  },
  password: {
    type: String,
    required: true
  }
});

/**
 * Hash password
 */
playerSchema.pre('save', function (next) {
  const player = this;
  if (!player.isModified('password')) return next();

  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

/**
 * Autopopulate fields
 */

const autoPopulateAffinity = function (next) {
  this.populate('affinities');
  next();
}

const autoPopulateAvailability = function (next) {
  this.populate('availlabilityPlanning');
  next();
}

const autoPopulateStats = function (next) {
  this.populate('stats');
  next();
}

playerSchema.
  pre('findOne', autoPopulateAffinity, autoPopulateAvailability, autoPopulateStats).
  pre('find', autoPopulateAffinity, autoPopulateAvailability, autoPopulateStats);

module.exports = playerSchema;