import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { UserRoleDto } from 'src/dto/user_role.dto';
import { UserRoleService } from '../services/user-role.service';

@Controller('/api')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post('/user-role')
  @HttpCode(HttpStatus.OK)
  addUserRole(@Body(new ValidationPipe()) userRoleDto: UserRoleDto): any {
    return this.userRoleService.addUserRole(userRoleDto);
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
