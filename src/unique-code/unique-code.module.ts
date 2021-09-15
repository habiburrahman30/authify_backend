import { Module } from '@nestjs/common';
import { UniqueCodeController } from './controllers/unique-code.controller';
import { UniqueCodeService } from './services/unique-code.service';

@Module({
  controllers: [UniqueCodeController],
  providers: [UniqueCodeService],
})
export class UniqueCodeModule {}
