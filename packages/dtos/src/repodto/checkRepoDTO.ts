import { IsString } from 'class-validator';

export interface ICheckRepoDTO {
  repoName: string;
}

export class CheckRepoDTO implements ICheckRepoDTO {
  @IsString()
  repoName: string;
}
