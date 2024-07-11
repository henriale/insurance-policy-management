import { Module } from '@nestjs/common';
import { BasicStrategy } from './auth-basic.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PassportModule, UserModule],
  providers: [BasicStrategy],
})
export class AuthModule {}
