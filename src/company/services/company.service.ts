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
      const companyData = new this.companyModel({
        name: body['name'],
        adminEmail: body['adminEmail'],
        logoImage: body['logoImage'],
      });
      const company = await companyData.save();

<<<<<<< HEAD
      return {
        msg: 'Company added successfully',
        data: company,
        success: true,
      };
=======
      return await company.save();
>>>>>>> 120697b455dfd3e80739e867664bb4bb21a27b75
    } catch (error) {
      console.log(error);
    }
  }

  async getAllCompanys() {
    try {
<<<<<<< HEAD
      const company = await this.companyModel.find().exec();

      return {
        msg: 'All Companys',
        data: company,
        success: true,
      };
=======
      return await this.companyModel.find().exec();
>>>>>>> 120697b455dfd3e80739e867664bb4bb21a27b75
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
<<<<<<< HEAD
      const company = await this.companyModel.findByIdAndDelete(id).exec();

      return {
        msg: 'Company deleted successfully',
        data: company,
        success: true,
      };
=======
      return await this.companyModel.findByIdAndDelete(id).exec();
>>>>>>> 120697b455dfd3e80739e867664bb4bb21a27b75
    } catch (error) {
      console.log(error);
    }
  }

  async updateCompanyById(body, id) {
    try {
<<<<<<< HEAD
      const company = await this.companyModel
        .findByIdAndUpdate(id, body, { new: true })
        .exec();

      return {
        msg: 'Company update successfully',
        data: company,
        success: true,
      };
=======
      console.log(body, id);

      return await this.companyModel.findByIdAndUpdate(
        id,
        body,
        { new: true }
      ).exec();
>>>>>>> 120697b455dfd3e80739e867664bb4bb21a27b75
    } catch (error) {
      console.log(error);
    }
  }
}
