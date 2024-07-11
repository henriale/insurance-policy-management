import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { PolicyService } from './policy.service';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/user/get-user.decorator';
import { User } from 'src/user/user.entity';

@Controller('policies')
@UseGuards(AuthGuard('basic'))
@UsePipes(new ValidationPipe({ transform: true }))
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createPolicyDto: CreatePolicyDto,
    @GetUser() user: User,
  ) {
    return this.policyService.create(createPolicyDto, user.id);
  }

  @Get()
  async findAll() {
    return this.policyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    const policy = await this.policyService.findOne(id);
    this.policyService.throwIfNotAllowedOrForbidden(policy, user);

    return policy;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePolicyDto: UpdatePolicyDto,
    @GetUser() user: User,
  ) {
    const policy = await this.policyService.findOne(id);
    this.policyService.throwIfNotAllowedOrForbidden(policy, user);

    return this.policyService.update(id, updatePolicyDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    const policy = await this.policyService.findOne(id);
    this.policyService.throwIfNotAllowedOrForbidden(policy, user);

    this.policyService.remove(policy);
  }
}
