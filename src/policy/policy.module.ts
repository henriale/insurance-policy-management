import { Module } from '@nestjs/common';
import { PolicyController } from './policy.controller';
import { policyProviders } from './policy.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PolicyController],
  providers: [...policyProviders],
})
export class PolicyModule {}
