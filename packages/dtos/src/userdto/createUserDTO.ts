import { IsString } from "class-validator";

export interface IcreateUserDTO {
  username: string;
  githubId:string;
  token:string;
}

export class CreateUserDTO implements IcreateUserDTO {
  @IsString()
  username: string;
  @IsString()
  githubId: string;
  @IsString()
  token: string;
}
