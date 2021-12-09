import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { JWTAuthGuard } from "src/auth/guard/jwtGuard";
import { IUser } from "../../../entities/src";
import { IcreatePortfolioDTO } from "../../../dtos/src";
import { FileInterceptor } from "@nestjs/platform-express";
import * as path from "path";
import { diskStorage } from "multer";

export const storeImage = {
  storage: diskStorage({
    destination: `${process.cwd()}/dist/images`,
    filename: (_req, file, cb) => {
      const filename: string = path
        .parse("portfolioImage")
        .name.replace(/\s/g, "");
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

export const storeResume = {
  storage: diskStorage({
    destination: `${process.cwd()}/dist/resume`,
    filename: (_req, file, cb) => {
      const filename: string = path.parse("resume").name.replace(/\s/g, "");
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  hello() {
    return "hello";
  }

  @UseGuards(JWTAuthGuard)
  @Get("me")
  async getMe(@Req() req): Promise<IUser | undefined> {
    return await this.userService.getUser(req.user.id);
  }

  @UseGuards(JWTAuthGuard)
  @Post("/create")
  async createPortfolio(@Body() dto: IcreatePortfolioDTO, @Req() req) {
    return await this.userService.createPortfolio(dto, req.user.id);
  }

  @UseGuards(JWTAuthGuard)
  @Post("/uploadImage")
  @UseInterceptors(FileInterceptor("file", storeImage))
  uploadImage(@UploadedFile() file) {
    try {
      console.log(file, "filename");
      return file.filename;
    } catch (err) {
      console.log(err);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Post("/uploadResume")
  @UseInterceptors(FileInterceptor("resume", storeResume))
  uploadFile(@UploadedFile() file) {
    try {
      console.log(file, "filename");
      return file.filename;
    } catch (err) {
      console.log(err);
    }
  }
}
