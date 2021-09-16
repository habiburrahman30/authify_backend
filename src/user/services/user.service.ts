import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { parse } from 'querystring';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async addUser(userDto: UserDto, IpAddress) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(userDto.password, salt);

      const userData = new this.userModel({
        name: userDto.name,
        role: userDto.role,
        email: userDto.email,
        password: passwordHash,
        phone: userDto.phone,
        address: userDto.address,
        email2: userDto.email2,
        photo: userDto.photo,
        lastLogin: new Date().toDateString(),
        ip: IpAddress,
      });
      const user = await userData.save();

      return {
        msg: 'User added successfully',
        data: user,
        success: true,
      };
    } catch (error) {
      console.log(error.message);
      return error.message;
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
    }
  }

  async getUserById(id) {
    try {
      return await this.userModel.findById(id).exec();
    } catch (error) {
      console.log(error);
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
    }
  }

  async updateUserById(body, id) {
    try {
      const user = await this.userModel
        .findByIdAndUpdate(id, body, { new: true })
        .exec();

      return {
        msg: 'User update successfully',
        data: user,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
