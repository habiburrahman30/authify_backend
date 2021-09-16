import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ProductDocument = Product & Document;
@Schema({ timestamps: true, autoIndex: true, skipVersioning: true })
export class Product {
  @Prop({
    required: true,
  })
  category: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  description: string;

  @Prop({
    required: true,
  })
  image: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
