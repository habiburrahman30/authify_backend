import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UniqueCodeDocument = UniqueCode & Document;

@Schema({ timestamps: true, autoIndex: true, skipVersioning: true })
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
}
export const UniqueCodeSchema = SchemaFactory.createForClass(UniqueCode);
