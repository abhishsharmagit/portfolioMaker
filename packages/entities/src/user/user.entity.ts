import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FileEntity } from '../file/file.entity';
import { PortfolioEntity } from '../portfolio/portfolio.entity';
import { RepoEntity } from '../repo/repo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  token: string;

  @Column()
  githubId: string;

  @OneToMany(() => FileEntity, (file: FileEntity) => file.id)
  file: FileEntity[];

  @OneToMany(
    () => PortfolioEntity,
    (portfolio: PortfolioEntity) => portfolio.id,
  )
  portfolios: PortfolioEntity[];
  @OneToMany(() => RepoEntity, (repo: RepoEntity) => repo.id)
  repos: RepoEntity[];
}

export interface IUser {
  id: string | number;
  githubId: string;
  username: string;
}
