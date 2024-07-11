import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

export const userProviders = [
  UserService,
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
