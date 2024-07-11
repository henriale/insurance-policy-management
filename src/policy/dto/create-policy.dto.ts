import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreatePolicyDto {
  @IsDateString()
  @IsNotEmpty()
  start_date: Date;

  @IsDateString()
  @IsNotEmpty()
  end_date: Date;
}
