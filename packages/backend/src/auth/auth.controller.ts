import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JWTPayload } from 'src/helper/types';
import { GithubAuthGuard } from './guard/githubGuard';

@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  @UseGuards(GithubAuthGuard)
  @Redirect()
  @Get('/callback')
  getUserfromGithub(@Req() req) {
    try {
      const payload: JWTPayload = {
        id: req.user.id,
        username: req.user.username,
      };

      const token = this.jwtService.sign(payload);
      return {
        url: `${this.configService.get('REDIRECT_FRONTEND')}/${token}`,
      };
    } catch (e) {
      console.log(e);
    }
  }
}
