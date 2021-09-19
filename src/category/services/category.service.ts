import { Category, CategoryDocument } from './../../schemas/category.schema';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDto } from 'src/dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<CategoryDocument>,
  ) {}

  async addCategory(categoryDto: CategoryDto) {
    try {
      const categoryData = new this.categoryModel({
        name: categoryDto.name,
      });
      const category = await categoryData.save();

      return {
        msg: 'Category added successfully',
        data: category,
        success: true,
      };
    } catch (error) {
      console.log(error);

      return { error: error.message, status: HttpStatus.BAD_REQUEST };
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
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async getCategoryById(id) {
    try {
      return await this.categoryModel.findById(id).exec();
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
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
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async updateCategoryById(categoryDto: CategoryDto, id) {
    try {
      const category = await this.categoryModel
        .findByIdAndUpdate(id, categoryDto, { new: true })
        .exec();

      return {
        msg: 'Category update successfully',
        data: category,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }
}
