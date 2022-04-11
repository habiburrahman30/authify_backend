import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { ProductService } from '../services/product.service';

@Controller('/api')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/product')
  @HttpCode(HttpStatus.OK)
  addProduct(@Body() productDto: ProductDto): any {
    return this.productService.addProduct(productDto);
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
  updateProductById(
    @Body(new ValidationPipe()) productDto: ProductDto,
    @Param('id') id,
  ) {
    return this.productService.updateProductById(productDto, id);
  }
}
