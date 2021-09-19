import { IsEmail, IsString, Length } from 'class-validator';

export class CompanyDto {
  @IsString()
  @Length(3, 30)
  name: string;

  @IsEmail()
  adminEmail: string;

  @IsString()
  logoImage: string;
}
