import * as express from 'express';
import { getConfiguration } from '../configuration';
import { getRepository } from 'typeorm';
import { Whisky } from '../entities/Whisky';
import { authMiddleware } from '../auth-middleware';

const { jwt: jwtConfig } = getConfiguration();

const whisky = express.Router();

whisky.use(authMiddleware);

whisky.get('/', async function(req, res) {
  const repo = getRepository<Whisky>(Whisky);
  const whiskies = await repo.find();
  res.send(whiskies);
});

whisky.post('/', async (req, res) => {
  const repo = getRepository<Whisky>(Whisky);
  const { brand, age }: Whisky = req.body;
  const saved = await repo.save({ brand, age } as Whisky);
  res.send(saved);
});

whisky.get('/:id', async (req, res) => {
  const repo = getRepository<Whisky>(Whisky);
  const id = req.params.id;
  const whiskyById = await repo.findOne(id);
  if (whiskyById) {
    res.send(whiskyById);
  } else {
    res.sendStatus(404);
  }
});

export default whisky;
