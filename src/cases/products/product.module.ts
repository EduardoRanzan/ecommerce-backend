import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { Product } from "./product.entity";
import { CategoryModule } from "../categories/category.module";
import { CategoryService } from "../categories/category.service";

@Module({
  imports: [TypeOrmModule.forFeature([Product]), CategoryModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}