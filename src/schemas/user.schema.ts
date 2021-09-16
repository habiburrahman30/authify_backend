import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema({ timestamps: true, autoIndex: true, skipVersioning: true })
export class User {
  @Prop({
    required: true,
  })
  name: String;

  @Prop({
    required: true,
  })
  role: String;

  @Prop({
    required: true,
    unique: true,
  })
  email: String;

  @Prop({
    required: true,
  })
  password: String;

  @Prop({
    required: true,
    unique: true,
  })
  phone: String;

  @Prop({
    required: true,
  })
  address: String;

  @Prop({
    required: true,
    unique: true,
  })
  email2: String;

  @Prop({
    required: true,
  })
  photo: String;

  @Prop({
    required: true,
  })
  lastLogin: String;

  @Prop({
    required: false,
  })
  ip: String;
}
export const UserSchema = SchemaFactory.createForClass(User);
