import { IsString, Length } from 'class-validator';

export class ProductDto {
  @IsString()
  categoryId: string;

  @IsString()
  name: string;

  @IsString()
  @Length(10, 255)
  description: string;

  @IsString()
  productImage: string;
}
