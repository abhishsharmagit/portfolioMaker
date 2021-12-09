import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-github2';
import { AuthService } from '../auth.service';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor(
    readonly configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      clientID: configService.get('CLIENT_ID'),
      clientSecret: configService.get('CLIENT_SECRET'),
      callbackURL: configService.get('REDIRECT_URI'),
    });
  }

  async validate(
    accessToken: string,
    refreshToken: any,
    profile: any,
  ): Promise<any> {
    console.log(accessToken, 'tokenI');
    console.log(profile, 'profile')
    const user = await this.authService.getUser(
      profile.id,
      profile.username,
      accessToken,
    );
    console.log(user,"user")
    return user;
  }
}
