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
import { CategoryDto } from 'src/dto/category.dto';
import { CategoryService } from '../services/category.service';

@Controller('/api')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/category')
  @HttpCode(HttpStatus.OK)
  addCategory(@Body() categoryDto: CategoryDto): any {
    return this.categoryService.addCategory(categoryDto);
  }

  @Get('/category')
  getAllCategorys() {
    return this.categoryService.getAllCategorys();
  }

  @Get('/category/:id')
  getCategoryById(@Param('id') id) {
    return this.categoryService.getCategoryById(id);
  }

  @Delete('/category/:id')
  deleteCategoryById(@Param('id') id) {
    return this.categoryService.deleteCategoryById(id);
  }

  @Put('/category/:id')
  updateCategoryById(
    @Body(new ValidationPipe()) categoryDto: CategoryDto,
    @Param('id') id,
  ) {
    return this.categoryService.updateCategoryById(categoryDto, id);
  }
}
