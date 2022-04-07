import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UniqueCodeDocument = UniqueCode & Document;

@Schema()
export class UniqueCode {
  @Prop({
    required: true,
  })
  productId: string;

  @Prop({
    required: true,
  })
  code: string;

  @Prop({
    required: true,
  })
  isVerified: boolean;

  @Prop({
    required: false,
  })
  verifyTime: string;

  @Prop({
    required: true,
  })
  deviceIp: string;

  @Prop({
    required: true,
  })
  companyId: string;

  @Prop({
    required: true,
  })
  companyName: string;
}
export const UniqueCodeSchema = SchemaFactory.createForClass(UniqueCode);
