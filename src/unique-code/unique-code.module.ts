import { IpService } from './../user/services/ip.service';
import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniqueCode, UniqueCodeSchema } from 'src/schemas/uniqueCode.schema';
import { UniqueCodeController } from './controllers/unique-code.controller';
import { UniqueCodeService } from './services/unique-code.service';
import { Company, CompanySchema } from 'src/schemas/company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UniqueCode.name, schema: UniqueCodeSchema },
      { name: Company.name, schema: CompanySchema },
    ]),
    HttpModule,
  ],
  controllers: [UniqueCodeController],
  providers: [UniqueCodeService, IpService],
})
export class UniqueCodeModule {}
