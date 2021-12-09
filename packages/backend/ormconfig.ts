import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';

const configService = new ConfigService();
const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  synchronize: true,
  migrationsTableName: 'typeorm_migrations',
  migrations: [path.resolve(`${process.cwd()}/dist/backend/migrations/*.js`)],
  cli: {
    migrationsDir: 'migrations',
  },
};
export default config;
