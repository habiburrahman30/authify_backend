import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async addProduct(body: any) {
    try {
      const productData = new this.productModel({
        category: body['category'],
        name: body['name'],
        description: body['description'],
        image: body['image'],
      });
      const product = await productData.save();

      return {
        msg: 'Product added successfully',
        data: product,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProducts() {
    try {
      const product = await this.productModel.find().exec();

      return {
        msg: 'All Products',
        data: product,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(id) {
    try {
      return await this.productModel.findById(id).exec();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProductById(id) {
    try {
      const product = await this.productModel.findByIdAndDelete(id).exec();

      return {
        msg: 'Product deleted successfully',
        data: product,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async updateProductById(body, id) {
    try {
      const product = await this.productModel
        .findByIdAndUpdate(id, body, { new: true })
        .exec();

      return {
        msg: 'Product update successfully',
        data: product,
        success: true,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
