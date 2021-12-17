import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  FileEntity,
  PortfolioEntity,
  RepoEntity,
  User,
} from '@package/entities';
import { UserModule } from 'src/user/user.module';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.servcie';

@Module({
  imports: [
    TypeOrmModule.forFeature([FileEntity, PortfolioEntity, RepoEntity, User]),
    UserModule,
  ],
  providers: [PortfolioService],
  controllers: [PortfolioController],
  exports: [PortfolioService],
})
export class PortfolioModule {}
