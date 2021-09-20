import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/dto/user.dto';
import { IpService } from './ip.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private ipService: IpService,
  ) {}

  async addUser(userDto: UserDto) {
    try {
      const ip = await this.ipService.getCurrentIp();

      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(userDto.password, salt);

      const userData = new this.userModel({
        name: userDto.name,
        roleId: userDto.roleId,
        email: userDto.email,
        password: passwordHash,
        phone: userDto.phone,
        address: userDto.address,
        recoveryEmail: userDto.recoveryEmail,
        thumbnail: userDto.thumbnail,
        lastLogin: this.getCurrentDate(),
        ip: ip,
      });
      const user = await userData.save();

      return {
        msg: 'User added successfully',
        data: user,
        success: true,
      };
    } catch (error) {
      console.log(error.message);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async getAllUsers() {
    try {
      const user = await this.userModel.find().exec();

      return {
        msg: 'All Users',
        data: user,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async getUserById(id) {
    try {
      return await this.userModel.findById(id).exec();
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async deleteUserById(id) {
    try {
      const user = await this.userModel.findByIdAndDelete(id).exec();

      return {
        msg: 'User deleted successfully',
        data: user,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async updateUserById(userDto: UserDto, id) {
    try {
      const user = await this.userModel
        .findByIdAndUpdate(id, userDto, { new: true })
        .exec();

      return {
        msg: 'User update successfully',
        data: user,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  getCurrentDate() {
    return new Date();
  }
}
