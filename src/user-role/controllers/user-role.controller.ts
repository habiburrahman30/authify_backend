import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRoleService } from '../services/user-role.service';

@Controller('/api')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post('/user-role')
  addUserRole(@Body() body) {
    return this.userRoleService.addUserRole(body);
  }

  @Get('/user-role')
  getAllUserRoles() {
    return this.userRoleService.getAllUserRoles();
  }

  @Get('/user-role/:id')
  getUserRoleById(@Param('id') id) {
    return this.userRoleService.getUserRoleById(id);
  }

  @Delete('/user-role/:id')
  deleteUserRoleById(@Param('id') id) {
    return this.userRoleService.deleteUserRoleById(id);
  }

  @Put('/user-role/:id')
  updateUserRoleById(@Body() body, @Param('id') id) {
    return this.userRoleService.updateUserRoleById(body, id);
  }
}
