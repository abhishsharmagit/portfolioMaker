import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JWTAuthGuard } from 'src/auth/guard/jwtGuard';
import { Request } from 'express';
import { IUser, User } from '../../../entities/src';
import {IcreatePortfolioDTO} from '../../../dto/src'
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { diskStorage } from 'multer';

export const storeImage = {
  storage: diskStorage({
    destination: `${process.cwd()}/dist/images`,
    filename: (req, file, cb) => {
      const filename: string = path
        .parse('portfolioImage')
        .name.replace(/\s/g, '');
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

export const storeResume = {
  storage: diskStorage({
    destination: `${process.cwd()}/dist/resume`,
    filename: (req, file, cb) => {
      const filename: string = path.parse('resume').name.replace(/\s/g, '');
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
    return 'hello';
  }

  @UseGuards(JWTAuthGuard)
  @Get('me')
  async getMe(@Req() req): Promise<IUser> {
    return await this.userService.getUser(req.user.id);
  }

  @UseGuards(JWTAuthGuard)
  @Post('/create')
  async createPortfolio(@Body() dto: IcreatePortfolioDTO, @Req() req) {
    return await this.userService.createPortfolio(dto, req.user.id);
  }

  @UseGuards(JWTAuthGuard)
  @Post('/uploadImage')
  @UseInterceptors(FileInterceptor('file', storeImage))
  uploadImage(@UploadedFile() file, @Req() req) {
    try {
      console.log(file, 'filename');
      return file.filename;
    } catch (err) {
      console.log(err);
    }
  }

  @UseGuards(JWTAuthGuard)
  @Post('/uploadResume')
  @UseInterceptors(FileInterceptor('resume', storeResume))
  uploadFile(@UploadedFile() file, @Req() req) {
    try {
      console.log(file, 'filename');
      return file.filename;
    } catch (err) {
      console.log(err);
    }
  }

 
}
