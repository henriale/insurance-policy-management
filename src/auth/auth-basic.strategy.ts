import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({});
  }

  public async validate(username, password): Promise<User> {
    const user = await this.userService.findByCredentials(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
