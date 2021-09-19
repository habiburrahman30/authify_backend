import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CategoryDocument = Category & Document;
@Schema({ timestamps: true, autoIndex: true, skipVersioning: true })
export class Category {
  @Prop({
    required: true,
    unique: true,
  })
  name: string;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
