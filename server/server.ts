import app from './app';
import { getConfiguration } from './configuration';
import { getLogger } from './Logger';
import {createConnection} from "typeorm";

const configuration = getConfiguration();
const {database} = configuration;

const Logger = getLogger();

createConnection({
  type: "mysql",
  host: database.host,
  port: database.port,
  username: database.user,
  password: database.pass,
  entities: [],
  synchronize: true,
  logging: false
}).then(async () => {
  Logger.debug("Established connection to database");


  app.listen(configuration.server.port, function() {
    Logger.info(
      `Whiskybook server listening on http://0.0.0.0:${configuration.server.port}`
    );
  });
});
