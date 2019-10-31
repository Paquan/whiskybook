import * as express from 'express';
import * as bodyParser from 'body-parser';

import AuthController from './routes/auth';
import WhiskyController from './routes/whisky';
import {getLogger} from "./Logger";

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(function (err, req, res, next) {
  const logger = getLogger();
  logger.error("Application error occurred: " + err.message);
  logger.error(err.stack);
  res.sendStatus(500);
});

// Routes
app.use('/auth', AuthController);
app.use('/whisky', WhiskyController);

app.all('/', (req, res) => {
  res.send('👋🥃📒');
});

export default app;
