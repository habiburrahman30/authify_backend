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
import { UniqueCodeDto } from 'src/dto/unique-code.dto';
import { UniqueCodeService } from '../services/unique-code.service';

@Controller('/api')
export class UniqueCodeController {
  constructor(private readonly uniqueCodeService: UniqueCodeService) { }

  @Post('/unique-code')
  @HttpCode(HttpStatus.OK)
  addUniqueCode(@Body(new ValidationPipe()) uniqueCodeDto: UniqueCodeDto): any {
    return this.uniqueCodeService.addUniqueCode(uniqueCodeDto);
    // console.log(uniqueCodeDto);

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
  updateUniqueCodeById(
    @Body(new ValidationPipe()) uniqueCodeDto: UniqueCodeDto,
    @Param('id') id,
  ) {
    return this.uniqueCodeService.updateUniqueCodeById(uniqueCodeDto, id);
  }

  @Post('/unique-code-match/:code')
  matchUniqueCode(@Param('code') code) {
    return this.uniqueCodeService.matchUniqueCode(code);
  }
}
