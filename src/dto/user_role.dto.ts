import { IsString, Length } from 'class-validator';

export class UserRoleDto {
  @IsString()
  @Length(3, 30)
  roleName: string;
}
