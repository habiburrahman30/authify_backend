import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompanyService } from '../services/company.service';

@Controller('/api')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('/company')
  addCompany(@Body() body) {
    return this.companyService.addCompany(body);
  }

  @Get('/company')
  getCompany() {
    return this.companyService.getCompany();
  }

  @Get('/company/:id')
  getCompanyById(@Param('id') id) {
    return this.companyService.getCompanyById(id);
  }

  @Delete('/company/:id')
  deleteCompanyById(@Param('id') id) {
    return this.companyService.deleteCompanyById(id);
  }

  @Patch('/company/:id')
  updateCompanyById(@Body() body, @Param('id') id) {
    return this.companyService.updateCompanyById(body, id);
  }
}
