const express = require("express");
const jwt = require("jsonwebtoken");

// FIXME after implementing database connection
const ADMIN = {
  user: "admin",
  pass: "pass"
};

const JWT_SECRET = "seeeeecret";
const JWT_EXPIRATION = "2d";

const auth = express.Router();

auth.post('/', function (req, res) {
  const {user,pass} = req.body;
  if (user === ADMIN.user && pass === ADMIN.pass){
    jwt.sign({user}, JWT_SECRET, {expiresIn: JWT_EXPIRATION}, function (err, token) {
      if (err) {
        res.sendStatus(500);
      }
      res.send(token);
    })
  } else {
    res.sendStatus(403);
  }
});

module.exports = auth;
