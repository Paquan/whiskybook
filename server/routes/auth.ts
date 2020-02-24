import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import { getConfiguration } from '../configuration';
import { getConnection } from 'typeorm';
import { User } from '../entities/User';

const { jwt: jwtConfig } = getConfiguration();

const auth = express.Router();

auth.post('/', async function(req, res) {
  const { email, pass } = req.body;

  const repo = getConnection().getRepository<User>(User);
  const user: User = await repo.findOne({ where: { email } });

  const passMatch = await bcrypt.compare(pass, user.passwordHash);
  if (passMatch) {
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
