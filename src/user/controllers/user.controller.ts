import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { IpAddress } from '../../decorator/ipAddress';
import { UserDto } from 'src/dto/user.dto';

@Controller('/api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/user')
  addCompany(@Body() userDto: UserDto, @IpAddress() IpAddress): any {
    return this.userService.addUser(userDto, IpAddress);
  }

  @Get('/user')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/user/:id')
  getUserById(@Param('id') id) {
    return this.userService.getUserById(id);
  }

  @Delete('/user/:id')
  deleteUserById(@Param('id') id) {
    return this.userService.deleteUserById(id);
  }

  @Put('/user/:id')
  updateUserById(@Body() body, @Param('id') id) {
    return this.userService.updateUserById(body, id);
  }
}
