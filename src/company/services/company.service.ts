import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyDto } from 'src/dto/company.dto';
import { Company, CompanyDocument } from 'src/schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) { }

  async addCompany(companyDto: CompanyDto) {
    try {
      const companyData = new this.companyModel({
        name: companyDto.name,
        adminEmail: companyDto.adminEmail,
        logoImage: companyDto.logoImage,
      });
      const company = await companyData.save();

      return {
        msg: 'Company added successfully',
        data: company,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async getAllCompanys() {
    try {
      const company = await this.companyModel.find().exec();
      // return company;
      return {
        msg: 'All Companys',
        data: company,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async getCompanyById(id) {
    try {
      return await this.companyModel.findById(id).exec();
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async deleteCompanyById(id) {
    try {
      const company = await this.companyModel.findByIdAndDelete(id).exec();

      return {
        msg: 'Company deleted successfully',
        data: company,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async updateCompanyById(companyDto: CompanyDto, id) {
    try {
      const company = await this.companyModel
        .findByIdAndUpdate(id, companyDto, { new: true })
        .exec();

      return {
        msg: 'Company update successfully',
        data: company,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }
}
