import { IsString } from 'class-validator';

export interface IGetPortfolioDTO {
  id: string;
}

export class GetPortfolioDTO implements IGetPortfolioDTO {
  @IsString()
  id: string;
}
