import { IsBoolean, IsString } from 'class-validator';

export class UniqueCodeDto {
  @IsString()
  productId: string;

  @IsString()
  code: string;

  @IsBoolean()
  isVerified: boolean;

  @IsString()
  deviceIp: string;
}
