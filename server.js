'use strict';

const express = require('express');
const app = express();
const config = require('config');
const bodyParser = require('body-parser');
const boom = require('@hapi/boom');
const cors = require('cors');
const logger = require('morgan')
const db = require ('./api/helpers/db/db');
const swaggerUi = require('swagger-ui-express');


// Define the app port
const port = process.env.PORT || 3000;

//Import swagger document
const swaggerDocument = require('./api/helpers/swagger/swaggerOptions.js');

// Set the app configuration*
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Define the global rooter
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", require("./api/routes/rooter.js"));

app.use(function (err, req, res, next) {
    console.log(err);
    if (!err.isBoom) {
        err = boom.internal("Internal server error");
    }
    // Set the output status
    res.status(err.output.statusCode);
    res.json(err.output.payload);
});

// Listen the app port
app.listen(port);

console.log('Epic road trip api oactivity micro-service started on:' + port);
