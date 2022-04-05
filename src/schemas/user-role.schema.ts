import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserRoleDocument = UserRole & Document;
@Schema()
export class UserRole {
  @Prop({
    required: true,
  })
  roleName: string;
}
export const UserRoleSchema = SchemaFactory.createForClass(UserRole);
