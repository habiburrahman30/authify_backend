import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from 'src/schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) { }

  async addCompany(body: any) {
    try {
      const company = new this.companyModel({
        name: body['name'],
        adminEmail: body['adminEmail'],
        logoImage: body['logoImage'],
      });

      return await company.save();
    } catch (error) {
      console.log(error);
    }
  }

  async getCompany() {
    try {
      return await this.companyModel.find().exec();
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
      return await this.companyModel.findByIdAndDelete(id).exec();
    } catch (error) {
      console.log(error);
    }
  }

  async updateCompanyById(body, id) {
    try {
      console.log(body, id);

      return await this.companyModel.findByIdAndUpdate(
        id,
        body,
        { new: true }
      ).exec();
    } catch (error) {
      console.log(error);
    }
  }
}
