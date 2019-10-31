import * as fs from 'fs';
import * as path from 'path';
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
  isFirstStart: boolean;
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
  root: {
    email: string;
    pass: string;
  };
}

export const getConfiguration = (): Configuration => {
  if (!configFile) {
    loadConfig();
  }

  const {
    NODE_ENV,
    WB_FIRST_START,
    WB_SERVER_PORT,
    WB_JWT_SECRET,
    WB_JWT_EXPIRATION,
    WB_DB_HOST,
    WB_DB_PORT,
    WB_DB_DATABASE,
    WB_DB_USER,
    WB_DB_PASS,
    WB_ROOT_EMAIL,
    WB_ROOT_PASS,
  } = process.env;

  return {
    isFirstStart: Boolean(WB_FIRST_START),
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
    root: {
      email: WB_ROOT_EMAIL || configFile.root.email || 'root@localhost',
      pass: WB_ROOT_PASS || configFile.root.pass || 'changeme',
    },
  };
};
