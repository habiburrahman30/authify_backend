import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UniqueCodeDto } from 'src/dto/unique-code.dto';
import { UniqueCode, UniqueCodeDocument } from 'src/schemas/unique-code.schema';

@Injectable()
export class UniqueCodeService {
  constructor(
    @InjectModel(UniqueCode.name)
    private uniqueCodeModel: Model<UniqueCodeDocument>,
  ) {}

  async addUniqueCode(uniqueCodeDto: UniqueCodeDto) {
    try {
      const uniqueCodeData = new this.uniqueCodeModel({
        productId: uniqueCodeDto.productId,
        code: uniqueCodeDto.code,
        isVerified: uniqueCodeDto.isVerified,
        verifyTime: this.getCurrentDate(),
        deviceIp: uniqueCodeDto.deviceIp,
      });
      const uniqueCode = await uniqueCodeData.save();

      return {
        msg: 'Unique Code added successfully',
        data: uniqueCode,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
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
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async getUniqueCodeById(id) {
    try {
      return await this.uniqueCodeModel.findById(id).exec();
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
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
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async updateUniqueCodeById(uniqueCodeDto: UniqueCodeDto, id) {
    try {
      const uniqueCode = await this.uniqueCodeModel
        .findByIdAndUpdate(id, uniqueCodeDto, { new: true })
        .exec();

      return {
        msg: 'Unique Code update successfully',
        data: uniqueCode,
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
