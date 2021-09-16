import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UniqueCodeService } from '../services/unique-code.service';

@Controller('/api')
export class UniqueCodeController {
  constructor(private readonly uniqueCodeService: UniqueCodeService) {}

  @Post('/unique-code')
  addUniqueCode(@Body() body) {
    return this.uniqueCodeService.addUniqueCode(body);
  }

  @Get('/unique-code')
  getAllUniqueCodes() {
    return this.uniqueCodeService.getAllUniqueCodes();
  }

  @Get('/unique-code/:id')
  getUniqueCodeById(@Param('id') id) {
    return this.uniqueCodeService.getUniqueCodeById(id);
  }

  @Delete('/unique-code/:id')
  deleteUniqueCodeById(@Param('id') id) {
    return this.uniqueCodeService.deleteUniqueCodeById(id);
  }

  @Put('/unique-code/:id')
  updateUniqueCodeById(@Body() body, @Param('id') id) {
    return this.uniqueCodeService.updateUniqueCodeById(body, id);
  }
}
