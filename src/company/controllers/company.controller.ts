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
import { CompanyDto } from 'src/dto/company.dto';
import { CompanyService } from '../services/company.service';

@Controller('/api')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('/company')
  @HttpCode(HttpStatus.OK)
  addCompany(@Body() companyDto: CompanyDto): any {
    return this.companyService.addCompany(companyDto);
  }

  @Get('/company')
  getAllCompanys() {
    return this.companyService.getAllCompanys();
  }

  @Get('/company/:id')
  getCompanyById(@Param('id') id) {
    return this.companyService.getCompanyById(id);
  }

  @Delete('/company/:id')
  deleteCompanyById(@Param('id') id) {
    return this.companyService.deleteCompanyById(id);
  }

  @Put('/company/:id')
  updateCompanyById(
    @Body(new ValidationPipe()) companyDto: CompanyDto,
    @Param('id') id,
  ) {
    return this.companyService.updateCompanyById(companyDto, id);
  }
}
