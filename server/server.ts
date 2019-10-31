import { createConnection } from 'typeorm';
import * as bcrypt from 'bcrypt';

import app from './app';
import { getLogger } from './Logger';
import { getConfiguration } from './configuration';
import { User } from './entities/User';
import { Whisky } from './entities/Whisky';

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
    const userRepo = connection.getRepository(User);
    const root = new User();
    root.email = configuration.root.email;
    root.passwordHash = await bcrypt.hash(configuration.root.pass, 10);
    await userRepo.save(root);
    Logger.info('Created initial root user with provided password');

    const whiskyRepo = connection.getRepository(Whisky);
    const whiskies: Whisky[] = [
      {
        brand: 'Billicher Fusel',
        age: 0.5,
      },
      {
        brand: 'Relativ angenehmer Rachenfeger',
        age: 10,
      },
      {
        brand: 'Glengrande Exclusiva',
        age: 50,
      },
    ];
    const saved = await whiskyRepo.save(whiskies);
    Logger.debug(
      'Saved sample whiskies with following ids: ' +
        saved.map(w => w.id).join(',')
    );
  }

  app.listen(configuration.server.port, function() {
    Logger.info(
      `Whiskybook server listening on http://0.0.0.0:${configuration.server.port}`
    );
  });
});
