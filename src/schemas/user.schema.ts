import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema({ timestamps: true, autoIndex: true, skipVersioning: true })
export class User {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  roleId: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    required: true,
    unique: true,
  })
  phone: string;

  @Prop({
    required: true,
  })
  address: string;

  @Prop({
    required: true,
    unique: true,
  })
  recoveryEmail: string;

  @Prop({
    required: true,
  })
  thumbnail: string;

  @Prop({
    required: true,
  })
  lastLogin: string;

  @Prop({
    required: false,
  })
  ip: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
