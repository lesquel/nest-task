import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  identifier: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
