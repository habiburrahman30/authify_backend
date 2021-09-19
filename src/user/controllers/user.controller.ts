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
import { UserService } from '../services/user.service';
import { UserDto } from 'src/dto/user.dto';

@Controller('/api')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/user')
  @HttpCode(HttpStatus.OK)
  addCompany(@Body(new ValidationPipe()) userDto: UserDto): any {
    return this.userService.addUser(userDto);
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
  updateUserById(@Body(new ValidationPipe()) userDto: UserDto, @Param('id') id) {
    return this.userService.updateUserById(userDto, id);
  }
}
