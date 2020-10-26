'use strict'

const mongoose = require('mongoose');
const booom = require('@hapi/boom');
const playerSchema = require('../../schemas/PlayerSchema');
const Player = mongoose.model('Player', playerSchema);

const registration = function (req, res, next) {
  if (req.body.player.password !== req.body.player.confirmPassword) {
    return next(booom.badRequest("Password and confirm password aren't the same"));
  } else {
    // Create player object
    let player = new Player({
      firstName: req.body.player.firstName,
      lastName: req.body.player.lastName,
      pseudo: req.body.player.pseudo,
      email: req.body.player.email,
      phoneNumber: req.body.player.phoneNumber,
      password: req.body.player.password,
    });

    player.save(function (err, player){
      if (err) return next(boom.badRequest(err));
      console.log('Player created');
      res.json({
        status: "success",
        message: `Player ${player.pseudo} have been created`
      });
    });
  }
}

module.exports = registration;