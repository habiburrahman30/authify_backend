import { Category, CategoryDocument } from './../../schemas/category.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<CategoryDocument>,
  ) {}

  async addCategory(body: any) {
    try {
      const categoryData = new this.categoryModel({
        name: body['name'],
      });
      const category = await categoryData.save();

      return {
        msg: 'Category added successfully',
        data: category,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getAllCategorys() {
    try {
      const category = await this.categoryModel.find().exec();

      return {
        msg: 'All Categorys',
        data: category,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getCategoryById(id) {
    try {
      return await this.categoryModel.findById(id).exec();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCategoryById(id) {
    try {
      const category = await this.categoryModel.findByIdAndDelete(id).exec();

      return {
        msg: 'Category deleted successfully',
        data: category,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async updateCategoryById(body, id) {
    try {
      const category = await this.categoryModel
        .findByIdAndUpdate(id, body, { new: true })
        .exec();

      return {
        msg: 'Category update successfully',
        data: category,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
