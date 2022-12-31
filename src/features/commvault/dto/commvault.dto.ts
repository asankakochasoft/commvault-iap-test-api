import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CommvaultDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsString()
  @IsNotEmpty()
  prefix: string;
}
