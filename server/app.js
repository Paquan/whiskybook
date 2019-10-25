const express = require("express");
const bodyParser = require("body-parser");

const AuthController = require("./routes/auth");

const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/auth', AuthController);

module.exports = app;
