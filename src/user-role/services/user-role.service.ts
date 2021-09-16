import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRole, UserRoleDocument } from 'src/schemas/user-role.schema';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectModel(UserRole.name)
    private userRoleModel: Model<UserRoleDocument>,
  ) {}

  async addUserRole(body: any) {
    try {
      const userRoleData = new this.userRoleModel({
        roleName: body['roleName'],
      });
      const userRole = await userRoleData.save();

      return {
        msg: 'User role added successfully',
        data: userRole,
        success: true,
      };
    } catch (error) {
      console.log(error);
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
    }
  }

  async getUserRoleById(id) {
    try {
      return await this.userRoleModel.findById(id).exec();
    } catch (error) {
      console.log(error);
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
    }
  }

  async updateUserRoleById(body, id) {
    try {
      const userRole = await this.userRoleModel
        .findByIdAndUpdate(id, body, { new: true })
        .exec();

      return {
        msg: 'User role update successfully',
        data: userRole,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
