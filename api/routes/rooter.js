'use strict';
const express = require('express');
const router = express.Router();

// IUmport controller
const securityController = require('../controllers/security');


/**
 * Routes for player registration and player connection
 */

router.post('/registration', securityController.registration);
router.post('/connection', securityController.connection);

// Export router
module.exports = router;