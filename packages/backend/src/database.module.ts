import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';
import { dev } from './helper/types';
import { User } from '../../entities/src/user/user.entity';
import { FileEntity } from '../../entities/src/file/file.entity';
import { PortfolioEntity } from '../../entities/src/portfolio/portfolio.entity';
import { RepoEntity } from '../../entities/src/repo/repo.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        dev
          ? {
              type: 'postgres',
              host: configService.get('POSTGRES_HOST'),
              port: configService.get('POSTGRES_PORT'),
              username: configService.get('POSTGRES_USER'),
              password: configService.get('POSTGRES_PASSWORD'),
              database: configService.get('POSTGRES_DB'),
              entities: [User, FileEntity, PortfolioEntity, RepoEntity],
              synchronize: true,
              migrationsTableName: 'typeorm_migrations',
              migrations: [
                path.resolve(`${process.cwd()}/dist/migrations/*.js`),
              ],
              cli: {
                migrationsDir: 'migrations',
              },
            }
          : {
              type: 'postgres',
              host: configService.get('POSTGRES_HOST'),
              port: configService.get('POSTGRES_PORT'),
              username: configService.get('POSTGRES_USER'),
              password: configService.get('POSTGRES_PASSWORD'),
              database: configService.get('POSTGRES_DB'),
              entities: [User, FileEntity, PortfolioEntity, RepoEntity],
              synchronize: true,
              migrationsTableName: 'typeorm_migrations',
              migrations: [
                path.resolve(`${process.cwd()}/dist/migrations/*.js`),
              ],
              cli: {
                migrationsDir: 'migrations',
              },
              ssl: {
                rejectUnauthorized: false,
              },
            },
    }),
  ],
})
export class DatabaseModule {}
