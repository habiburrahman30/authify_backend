import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRoleDto } from 'src/dto/user_role.dto';
import { UserRole, UserRoleDocument } from 'src/schemas/user-role.schema';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectModel(UserRole.name)
    private userRoleModel: Model<UserRoleDocument>,
  ) {}

  async addUserRole(userRoleDto: UserRoleDto) {
    try {
      const userRoleData = new this.userRoleModel({
        roleName: userRoleDto.roleName,
      });
      const userRole = await userRoleData.save();

      return {
        msg: 'User role added successfully',
        data: userRole,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async getAllUserRoles() {
    try {
      const userRole = await this.userRoleModel.find().exec();

      return {
        msg: 'All User Roles',
        data: userRole,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async getUserRoleById(id) {
    try {
      return await this.userRoleModel.findById(id).exec();
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async deleteUserRoleById(id) {
    try {
      const userRole = await this.userRoleModel.findByIdAndDelete(id).exec();

      return {
        msg: 'User role deleted successfully',
        data: userRole,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async updateUserRoleById(userRoleDto: UserRoleDto, id) {
    try {
      const userRole = await this.userRoleModel
        .findByIdAndUpdate(id, userRoleDto, { new: true })
        .exec();

      return {
        msg: 'User role update successfully',
        data: userRole,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }
}
