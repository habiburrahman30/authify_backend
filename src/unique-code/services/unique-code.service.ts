import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenerateUniqueCodeDto } from 'src/dto/generate-unique-code.dto';
import { UniqueCodeDto } from 'src/dto/unique-code.dto';
import {
  GenerateUniqueCode,
  GenerateUniqueCodeDocument,
} from 'src/schemas/generate-unique-code.schema';
import { UniqueCode, UniqueCodeDocument } from 'src/schemas/unique-code.schema';
import { IpService } from 'src/user/services/ip.service';

@Injectable()
export class UniqueCodeService {
  constructor(
    @InjectModel(UniqueCode.name)
    private uniqueCodeModel: Model<UniqueCodeDocument>,
    @InjectModel(GenerateUniqueCode.name)
    private generateUniqueCodeDocument: Model<GenerateUniqueCodeDocument>,
    private ipService: IpService,
  ) {}

  async addUniqueCode(uniqueCodeDto: UniqueCodeDto) {
    try {
      const ip = await this.ipService.getCurrentIp();
      const uniqueCodeData = new this.uniqueCodeModel({
        productId: uniqueCodeDto.productId,
        code: uniqueCodeDto.code,
        isVerified: uniqueCodeDto.isVerified,
        verifyTime: this.getCurrentDate(),
        deviceIp: ip,
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
  async matchUniqueCode(code) {
    try {
      const uniqueCode = await this.uniqueCodeModel
        .findOne({ code: code })
        .exec();

      if (uniqueCode && uniqueCode.isVerified == false) {
        uniqueCode.isVerified = true;
        await uniqueCode.save();
        return {
          msg: 'Unique Code verified successfully',
          success: true,
          status: HttpStatus.OK,
        };
      } else if (uniqueCode && uniqueCode.isVerified == true) {
        return {
          msg: 'Unique Code already used',
          success: false,
          status: HttpStatus.FORBIDDEN,
        };
      } else {
        return {
          msg: 'Unique Code invalid',
          success: false,
          status: HttpStatus.BAD_REQUEST,
        };
      }
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }
  async generateUniqueCode(generateUniqueCodeDto: GenerateUniqueCodeDto) {
    try {
      const generateUniqueCodeData = new this.generateUniqueCodeDocument({
        companyId: generateUniqueCodeDto.companyId,
        categoryId: generateUniqueCodeDto.categoryId,
        productId: generateUniqueCodeDto.productId,
      });
      console.log(generateUniqueCodeData);
      // const generateUniqueCode = await uniqueCodeData.save();
      return {
        msg: 'Generate unique code successfully',
        data: generateUniqueCodeData,
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
