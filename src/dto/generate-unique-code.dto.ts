import { IsString } from 'class-validator';

export class GenerateUniqueCodeDto {
  @IsString()
  companyId: string;

  @IsString()
  categoryId: string;

  @IsString()
  productId: string;
}
