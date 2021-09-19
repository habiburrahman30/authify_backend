import { IsString, IsEmail, Length } from 'class-validator';

export class UserDto {
  @IsString()
  @Length(3, 30)
  name: string;

  @IsString()
  role: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8)
  password: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsString()
  recoveryEmail: string;

  @IsString()
  thumbnail: string;
}
