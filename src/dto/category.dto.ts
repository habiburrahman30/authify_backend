import { IsString, Length } from 'class-validator';

export class CategoryDto {
  @IsString()
  @Length(3, 30)
  name: string;
}
