import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  password?: string;
}
