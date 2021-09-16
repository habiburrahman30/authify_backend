import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UniqueCode, UniqueCodeDocument } from 'src/schemas/unique-code.schema';

@Injectable()
export class UniqueCodeService {
  constructor(
    @InjectModel(UniqueCode.name)
    private uniqueCodeModel: Model<UniqueCodeDocument>,
  ) {}

  async addUniqueCode(body: any) {
    try {
      const uniqueCodeData = new this.uniqueCodeModel({
        product: body['product'],
        code: body['code'],
        isVerified: body['isVerified'],
        verifyTime: body['verifyTime'],
        deviceIp: body['deviceIp'],
      });
      const uniqueCode = await uniqueCodeData.save();

      return {
        msg: 'Unique Code added successfully',
        data: uniqueCode,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getAllUniqueCodes() {
    try {
      const uniqueCode = await this.uniqueCodeModel.find().exec();

      return {
        msg: 'All Unique Codes',
        data: uniqueCode,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getUniqueCodeById(id) {
    try {
      return await this.uniqueCodeModel.findById(id).exec();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUniqueCodeById(id) {
    try {
      const uniqueCode = await this.uniqueCodeModel
        .findByIdAndDelete(id)
        .exec();

      return {
        msg: 'Unique Code deleted successfully',
        data: uniqueCode,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async updateUniqueCodeById(body, id) {
    try {
      const uniqueCode = await this.uniqueCodeModel
        .findByIdAndUpdate(id, body, { new: true })
        .exec();

      return {
        msg: 'Unique Code update successfully',
        data: uniqueCode,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
