import { Module } from '@nestjs/common';
import { UserRoleService } from './services/user-role.service';
import { UserRoleController } from './controllers/user-role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRole, UserRoleSchema } from 'src/schemas/user-role.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserRole.name, schema: UserRoleSchema },
    ]),
  ],
  providers: [UserRoleService],
  controllers: [UserRoleController],
})
export class UserRoleModule {}
