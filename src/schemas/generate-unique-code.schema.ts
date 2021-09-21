import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type GenerateUniqueCodeDocument = GenerateUniqueCode & Document;
@Schema({ timestamps: true, autoIndex: true, skipVersioning: true })
export class GenerateUniqueCode {
  @Prop({
    required: true,
    unique: true,
  })
  companyId: string;

  @Prop({
    required: true,
    unique: true,
  })
  categoryId: string;

  @Prop({
    required: true,
    unique: true,
  })
  productId: string;
}
export const GenerateUniqueCodeSchema =
  SchemaFactory.createForClass(GenerateUniqueCode);
