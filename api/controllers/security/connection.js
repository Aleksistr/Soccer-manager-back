'use strict'

const mongoose = require('mongoose');
const boom = require('@hapi/boom');
const playerSchema = require('../../schemas/PlayerSchema');
const Player = mongoose.model('Player', playerSchema);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/default.json');


const connection = function (req, res, next) {
  Player.findOne({email: req.body.email}, function (err, player) {
    if (err || player == null) return next(boom.notFound("Player not found"));
    if (bcrypt.compareSync(req.body.password, player.password)) {
      const token = jwt.sign({id: player._id}, config.secretKey, {expiresIn: '2h'});
      res.json({status: 'success', message: 'You logged success', jwt: token});
    } else {
      return next(boom.badRequest("IInvalid credentials"));
    }
  });
};

module.exports = connection;