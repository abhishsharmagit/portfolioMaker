import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "../../../dtos/src";
import { User } from "../../../entities/src";

@Injectable()
export class AuthService {
  constructor(
    readonly configService: ConfigService,
    @InjectRepository(User) private userRepo: Repository<User>
  ) {}

  async getUser(id: any, username: string, token: string) {
    console.log(123);
    const userExist = await this.userRepo.findOne({ githubId: id });
    console.log(456);
    if (userExist) {
      await this.userRepo.update({ githubId: id }, { token });
      return await this.userRepo.findOne({ githubId: id });
    } else {
      const payload: CreateUserDTO = {
        username,
        token,
        githubId: id,
      };
      const userEntity = await this.userRepo.create(payload);
      const user = await this.userRepo.save(userEntity);
      return user;
    }
  }
}
