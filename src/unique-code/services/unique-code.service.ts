import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UniqueCodeDto } from 'src/dto/unique-code.dto';

import { UniqueCode, UniqueCodeDocument } from 'src/schemas/uniqueCode.schema';
import { IpService } from 'src/user/services/ip.service';

@Injectable()
export class UniqueCodeService {
  constructor(
    @InjectModel(UniqueCode.name)
    private uniqueCodeModel: Model<UniqueCodeDocument>,

    private ipService: IpService,
  ) {}

  async addUniqueCode(uniqueCodeDto: UniqueCodeDto) {
    try {
      const productDNA = `${uniqueCodeDto.companyName.substring(
        0,
        2,
      )}${uniqueCodeDto.categoryName.substring(
        0,
        2,
      )}${uniqueCodeDto.productName.substring(0, 2)}`;

      for (let index = 0; index < uniqueCodeDto.codeQuantity; index++) {
        const uniqueCode = `${productDNA}${this.generateString(15)}`.trim();

        const data = new this.uniqueCodeModel();
        data.productId = uniqueCodeDto.productId;
        data.code = uniqueCode;
        data.isVerified = false;
        data.verifyTime = null;
        data.deviceIp = await this.ipService.getCurrentIp();

        await data.save();
      }
      return {
        msg: 'Generate unique code successfully',
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
        uniqueCode.verifyTime = this.getCurrentDate();
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

  getCurrentDate() {
    return new Date().toDateString();
  }

  // declare all characters

  generateString(length) {
    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characters = '0123456789';
    let result = '-';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
