import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CompanyDocument = Company & Document;
@Schema({ timestamps: true, autoIndex: true, skipVersioning: true })
export class Company {
  @Prop({
    required: true,
  })
  name: string;
  // -

  @Prop({
    required: true,
  })
  adminEmail: string;

  @Prop({
    required: true,
  })
  logoImage: string;
}
export const CompanySchema = SchemaFactory.createForClass(Company);
