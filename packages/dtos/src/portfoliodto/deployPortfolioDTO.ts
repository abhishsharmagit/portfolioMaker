import { IsString } from "class-validator";

export interface IdeployDTO {
  owner: string;
  repo: string;
}

export class DeployPortfolioDTO implements IdeployDTO {
  @IsString()
  owner: string;
  @IsString()
  repo: string;
}
