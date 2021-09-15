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
      const company = new this.companyModel({
        name: body['name'],
        adminEmail: body['adminEmail'],
        logoImage: body['logoImage'],
      });

      await company.save();

      return 'Company added successfully';
    } catch (error) {
      console.log(error);
    }
  }

  async getCompany() {
    try {
      return this.companyModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  async getCompanyById(id) {
    try {
      return this.companyModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCompanyById(id) {
    try {
      return this.companyModel.findOneAndDelete({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }

  async updateCompanyById(body, id) {
    try {
      console.log(body, id);
      return;
      return this.companyModel.findOneAndUpdate(
        { _id: id },
        { new: true },
        body,
      );
    } catch (error) {
      console.log(error);
    }
  }
}
