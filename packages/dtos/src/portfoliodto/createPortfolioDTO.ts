import { IsString } from 'class-validator';

export interface IcreatePortfolioDTO {
  about: string;
  address: string;
  description: string;
  phone: string;
  firstName: string;
  portfolio: string;
  profile?: string;
  inTouch: string;
  email: string;
  template: string;
  imageName?: string;
  resumeName?: string;
}

export class CreatePortfolioDTO implements IcreatePortfolioDTO {
  @IsString()
  about: string;
  @IsString()
  address: string;
  @IsString()
  description: string;
  @IsString()
  firstName: string;
  @IsString()
  phone: string;
  @IsString()
  portfolio: string;
  @IsString()
  inTouch: string;
  @IsString()
  email: string;
  @IsString()
  template: string;
}
