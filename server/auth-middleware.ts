import * as jwt from 'jsonwebtoken';
import { getConfiguration } from './configuration';

const { jwt: jwtConfig } = getConfiguration();

export const authMiddleware = async (req, res, next) => {
  const header = req.header('Authorization');
  const [_, token] = /Bearer (.*)/.exec(header);
  if (!token) {
    res.sendStatus(403);
  }
  try {
    const valid = await jwt.verify(token, jwtConfig.secret);
    if (valid) next();
  } catch (error) {
    res.sendStatus(403);
  }
};
