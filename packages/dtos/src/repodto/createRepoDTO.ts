import { IsString } from "class-validator";

export interface ICreateRepoDTO {
  name: string;
  description: string;
  homepage: string;
  private: boolean;
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
}

export class CreateRepoDTO implements ICreateRepoDTO {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  homepage: string;
  @IsString()
  private: boolean;
  @IsString()
  has_issues: boolean;
  @IsString()
  has_projects: boolean;
  @IsString()
  has_wiki: boolean;
}
