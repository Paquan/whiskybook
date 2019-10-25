import express from 'express';
import jwt from 'jsonwebtoken';
import { getConfiguration } from '../configuration';

const {jwt: jwtConfig} = getConfiguration();

// FIXME after implementing database connection
const ADMIN = {
  user: 'admin',
  pass: 'pass',
};

const auth = express.Router();

auth.post('/', function(req, res) {
  const { user, pass } = req.body;
  if (user === ADMIN.user && pass === ADMIN.pass) {
    jwt.sign(
      { user },
      jwtConfig.secret,
      { expiresIn: jwtConfig.expiration },
      function(err, token) {
        if (err) {
          res.sendStatus(500);
        }
        res.send(token);
      }
    );
  } else {
    res.sendStatus(403);
  }
});

export default auth;
