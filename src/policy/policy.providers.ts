import { DataSource } from 'typeorm';
import { Policy } from './policy.entity';
import { PolicyService } from './policy.service';

export const policyProviders = [
  {
    provide: 'POLICY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Policy),
    inject: ['DATA_SOURCE'],
  },
  PolicyService,
];
