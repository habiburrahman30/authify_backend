import { IpService } from './../user/services/ip.service';
import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniqueCode, UniqueCodeSchema } from 'src/schemas/unique-code.schema';
import { UniqueCodeController } from './controllers/unique-code.controller';
import { UniqueCodeService } from './services/unique-code.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UniqueCode.name, schema: UniqueCodeSchema },
    ]),
    HttpModule,
  ],
  controllers: [UniqueCodeController],
  providers: [UniqueCodeService, IpService],
})
export class UniqueCodeModule {}
