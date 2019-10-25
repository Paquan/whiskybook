import fs from 'fs';
import path from 'path';
import uuid from 'uuid/v4';
import { getLogger } from './Logger';

const Logger = getLogger('Configuration');

let configFile: Configuration = null;

const loadConfig = () => {
  try {
    const contents = fs.readFileSync(
      path.resolve(
        process.cwd(),
        `whiskybook-config.${process.env.NODE_ENV}.json`
      )
    );
    configFile = JSON.parse(contents.toString());
  } catch (e) {
    Logger.error('Failed to read config file: ', e);
  }
};

interface Configuration {
  environment: string;
  server: {
    port: number;
  };
  jwt: {
    expiration: string;
    secret: string;
  };
  database: {
    host: string;
    port: number;
    database: string;
    user: string;
    pass: string;
  };
}

export const getConfiguration = (): Configuration => {
  if (!configFile) {
    loadConfig();
  }
  const {
    NODE_ENV,
    WB_SERVER_PORT,
    WB_JWT_SECRET,
    WB_JWT_EXPIRATION,
    WB_DB_HOST,
    WB_DB_PORT,
    WB_DB_DATABASE,
    WB_DB_USER,
    WB_DB_PASS,
  } = process.env;
  console.log(configFile);
  return {
    environment: NODE_ENV,
    server: {
      port: Number(WB_SERVER_PORT) || configFile.server.port || 8888,
    },
    jwt: {
      expiration: WB_JWT_EXPIRATION || configFile.jwt.expiration || '1d',
      secret: WB_JWT_SECRET || configFile.jwt.secret || uuid(),
    },
    database: {
      host: WB_DB_HOST || configFile.database.host || 'localhost',
      port: Number(WB_DB_PORT) || Number(configFile.database.port) || 3306,
      database: WB_DB_DATABASE || configFile.database.database || 'whiskybook',
      user: WB_DB_USER || configFile.database.user || 'root',
      pass: WB_DB_PASS || configFile.database.pass || '',
    },
  };
};
