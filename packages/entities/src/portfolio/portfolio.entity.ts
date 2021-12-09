import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class PortfolioEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  url: string;

  @Column()
  repoName: string;

  @ManyToOne(() => User, {
    lazy: true,
  })
  @JoinColumn({ name: 'userId' })
  user: User;
}
export interface IPortfolio {
  id: string;
  url: string;
  repoName?: string;
}
