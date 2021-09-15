import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  role: string;

  @Prop({
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    required: true,
  })
  phone: string;

  @Prop({
    required: true,
  })
  address: string;

  @Prop({
    required: true,
  })
  email2: string;

  @Prop({
    required: true,
  })
  photo: string;

  @Prop({
    required: true,
  })
  lastLogin: string;

  @Prop({
    required: true,
  })
  ip: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
