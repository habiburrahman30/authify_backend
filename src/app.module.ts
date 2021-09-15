import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { Company, CompanySchema } from './schemas/company.schema';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { UniqueCodeModule } from './unique-code/unique-code.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:oCr1fpDWngZlBNHj@cluster0.gryeg.mongodb.net/Product_Auth_Service?retryWrites=true&w=majority',
    ),
    CompanyModule,
    ProductModule,
    UserModule,
    UniqueCodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
