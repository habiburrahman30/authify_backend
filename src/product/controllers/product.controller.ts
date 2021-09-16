import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller('/api')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/product')
  addProduct(@Body() body) {
    return this.productService.addProduct(body);
  }

  @Get('/product')
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get('/product/:id')
  getProductById(@Param('id') id) {
    return this.productService.getProductById(id);
  }

  @Delete('/product/:id')
  deleteProductById(@Param('id') id) {
    return this.productService.deleteProductById(id);
  }

  @Put('/product/:id')
  updateProductById(@Body() body, @Param('id') id) {
    return this.productService.updateProductById(body, id);
  }
}
