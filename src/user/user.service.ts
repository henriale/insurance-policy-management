import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findByCredentials(
    username: User['username'],
    password: User['password'],
  ): Promise<User> {
    return this.userRepository.findOneBy({ username, password });
  }
}
