import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  fileName: string;

  @Column()
  sha: string;

  @Column()
  repoName: string;

  @ManyToOne(() => User, {
    lazy: true,
  })
  @JoinColumn({ name: 'userId' })
  user: User;
}
