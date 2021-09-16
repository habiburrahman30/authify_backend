import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';

@Controller('/api')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/category')
  addCategory(@Body() body) {
    return this.categoryService.addCategory(body);
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
  updateCategoryById(@Body() body, @Param('id') id) {
    return this.categoryService.updateCategoryById(body, id);
  }
}
