import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from 'src/dto/product.dto';
import { Product, ProductDocument } from 'src/schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async addProduct(productDto: ProductDto) {
    try {
      const productData = new this.productModel({
        categoryId: productDto.categoryId,
        name: productDto.name,
        description: productDto.description,
        productImage: productDto.productImage,
      });
      const product = await productData.save();

      return {
        msg: 'Product added successfully',
        data: product,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async getAllProducts() {
    try {
      const products = await this.productModel.find().exec();
      console.log(products);

      return {
        msg: 'All Products',
        data: products,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async getProductById(id) {
    try {
      return await this.productModel.findById(id).exec();
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
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
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }

  async updateProductById(productDto: ProductDto, id) {
    try {
      const product = await this.productModel
        .findByIdAndUpdate(id, productDto, { new: true })
        .exec();

      return {
        msg: 'Product update successfully',
        data: product,
        success: true,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message, status: HttpStatus.BAD_REQUEST };
    }
  }
}
