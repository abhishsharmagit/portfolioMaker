import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { JWTAuthGuard } from "src/auth/guard/jwtGuard";
import { ICheckRepoDTO, GetPortfolioDTO } from "../../../dtos/src";
import { UserService } from "src/user/user.service";
import { PortfolioService } from "./portfolio.servcie";
import { IPortfolio } from "../../../entities/src";

@Controller()
export class PortfolioController {
  constructor(
    private portfolioService: PortfolioService,
    private userService: UserService
  ) {}

  @UseGuards(JWTAuthGuard)
  @Post("getPortfolioById")
  async getCreatedPortfolio(
    @Body() dto: GetPortfolioDTO
  ): Promise<IPortfolio[]> {
    return await this.portfolioService.getCreatedPortfolio(dto.id);
  }

  @UseGuards(JWTAuthGuard)
  @Post("/repoExist")
  async checkRepoExist(
    @Body() dto: ICheckRepoDTO,
    @Req() req
  ): Promise<boolean | undefined> {
    const result = await this.userService.checkRepoExist(
      req.user.username,
      dto.repoName
    );
    console.log(result, "result");
    if (typeof result === "boolean") {
      return result;
    }
  }
}
