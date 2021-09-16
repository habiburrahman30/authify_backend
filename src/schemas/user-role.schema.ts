import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserRoleDocument = UserRole & Document;
@Schema({ timestamps: true, autoIndex: true, skipVersioning: true })
export class UserRole {
  @Prop({
    required: true,
  })
  roleName: string;
}
export const UserRoleSchema = SchemaFactory.createForClass(UserRole);
