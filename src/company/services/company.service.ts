import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from 'src/schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}

  async addCompany(body: any) {
    try {
      const companyData = new this.companyModel({
        name: body['name'],
        adminEmail: body['adminEmail'],
        logoImage: body['logoImage'],
      });
      const company = await companyData.save();

      return {
        msg: 'Company added successfully',
        data: company,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getAllCompanys() {
    try {
      const company = await this.companyModel.find().exec();

      return {
        msg: 'All Companys',
        data: company,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getCompanyById(id) {
    try {
      return await this.companyModel.findById(id).exec();
    } catch (error) {
      console.log(error);
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
    }
  }

  async updateCompanyById(body, id) {
    try {
      const company = await this.companyModel
        .findByIdAndUpdate(id, body, { new: true })
        .exec();

      return {
        msg: 'Company update successfully',
        data: company,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
