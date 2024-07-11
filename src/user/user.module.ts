import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders],
  exports: [...userProviders],
})
export class UserModule {}
