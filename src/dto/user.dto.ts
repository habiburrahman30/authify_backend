import { IsString, IsInt, IsEmail, Length } from 'class-validator';

export class UserDto {
  @IsString()
  name: string;

  @IsString()
  role: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8)
  password: string;

  @IsInt()
  phone: number;

  @IsString()
  address: string;

  @IsString()
  email2: string;

  @IsString()
  photo: string;
}

//  name: body['name'],
// role: body['role'],
// email: body['email'],
// password: passwordHash,
// phone: body['phone'],
// address: body['address'],
// email2: body['email2'],
// photo: body['photo'],
