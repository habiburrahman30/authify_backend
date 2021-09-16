import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { UniqueCodeModule } from './unique-code/unique-code.module';
import { CompanyModule } from './company/company.module';
import { CategoryModule } from './category/category.module';
import { UserRoleModule } from './user-role/user-role.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:oCr1fpDWngZlBNHj@cluster0.gryeg.mongodb.net/Product_Auth_Service?retryWrites=true&w=majority',
    ),
    CompanyModule,
    ProductModule,
    UserModule,
    UniqueCodeModule,
    CategoryModule,
    UserRoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
