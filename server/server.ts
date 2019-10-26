import { createConnection } from 'typeorm';
import bcrypt from 'bcrypt';

import app from './app';
import { getLogger } from './Logger';
import { getConfiguration } from './configuration';
import { User } from './entities/User';

const configuration = getConfiguration();
const { database } = configuration;

const Logger = getLogger();

createConnection({
  type: 'mysql',
  host: database.host,
  port: database.port,
  username: database.user,
  password: database.pass,
  database: database.database,
  entities: ['./entities/**/*.ts'],
  synchronize: true,
  logging: false,
}).then(async connection => {
  Logger.debug('Established connection to database');

  if (configuration.isFirstStart) {
    const repo = connection.getRepository(User);
    const root = new User();
    root.email = configuration.root.email;
    root.passwordHash = await bcrypt.hash(configuration.root.pass, 10);
    await repo.save(root);
    Logger.info('Created initial root user with provided password');
  }

  app.listen(configuration.server.port, function() {
    Logger.info(
      `Whiskybook server listening on http://0.0.0.0:${configuration.server.port}`
    );
  });
});
