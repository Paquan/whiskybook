import express from 'express';
import bodyParser from 'body-parser';

import AuthController from './routes/auth';

const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/auth', AuthController);

app.all('/', (req, res) => {
  res.send('👋🥃📒');
});

export default app;
