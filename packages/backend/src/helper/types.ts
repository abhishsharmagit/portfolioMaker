import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import {
  PortfolioEntity,
  RepoEntity,
  FileEntity,
  User,
} from '@package/entities';

export interface JWTPayload {
  id: string;
  username: string;
}
const configService = new ConfigService();

export const dev = process.env.NODE_ENV !== 'production';
export const developmentOptions = {
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [User, FileEntity, PortfolioEntity, RepoEntity],
  synchronize: false,
  migrationsTableName: 'typeorm_migrations',
  migrations: [path.resolve(`${process.cwd()}/dist/migrations/*.js`)],
  cli: {
    migrationsDir: 'migrations',
  },
};

export const prodOptions = {
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [User, FileEntity, PortfolioEntity, RepoEntity],
  synchronize: false,
  migrationsTableName: 'typeorm_migrations',
  migrations: [path.resolve(`${process.cwd()}/dist/migrations/*.js`)],
  cli: {
    migrationsDir: 'migrations',
  },
  ssl: {
    rejectUnauthorized: false,
  },
};
