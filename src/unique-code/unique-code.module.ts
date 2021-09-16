import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniqueCode, UniqueCodeSchema } from 'src/schemas/unique-code.schema';
import { UniqueCodeController } from './controllers/unique-code.controller';
import { UniqueCodeService } from './services/unique-code.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UniqueCode.name, schema: UniqueCodeSchema },
    ]),
  ],
  controllers: [UniqueCodeController],
  providers: [UniqueCodeService],
})
export class UniqueCodeModule {}
