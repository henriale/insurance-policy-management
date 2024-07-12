import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';
import { Repository } from 'typeorm';
import { Policy } from './policy.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class PolicyService {
  constructor(
    @Inject('POLICY_REPOSITORY') private policyRepository: Repository<Policy>,
  ) {}
  create(createPolicyDto: CreatePolicyDto, userId: User['id']) {
    return this.policyRepository.save({
      ...createPolicyDto,
      user_id: userId,
    });
  }

  findAll(userId: User['id']) {
    return this.policyRepository.findBy({ user_id: userId });
  }

  findOne(id: number) {
    return this.policyRepository.findOneBy({ id });
  }

  update(id: number, updatePolicyDto: UpdatePolicyDto) {
    return this.policyRepository.save({ id, ...updatePolicyDto });
  }

  remove(policy: Policy) {
    return this.policyRepository.delete(policy);
  }

  throwIfNotAllowedOrForbidden(policy: Policy, user: User) {
    if (!policy) {
      throw new NotFoundException('Policy not found');
    }
    if (policy.user_id !== user.id) {
      throw new ForbiddenException('Not allowed to perform this action.');
    }
  }
}
