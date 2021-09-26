import { IsNumber, IsString } from 'class-validator';

export class UniqueCodeDto {
  @IsString()
  productId: string;

  @IsString()
  companyName: string;

  @IsString()
  categoryName: string;

  @IsString()
  productName: string;

  @IsNumber()
  codeQuantity: number;
}
