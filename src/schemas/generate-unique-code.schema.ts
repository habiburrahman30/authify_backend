import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CompanyDocument = Company & Document;
@Schema({ timestamps: true, autoIndex: true, skipVersioning: true })
export class Company {
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
export const CompanySchema = SchemaFactory.createForClass(Company);
