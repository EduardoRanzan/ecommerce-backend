import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { CategoryModule } from "./cases/categories/category.module";
import { BrandModule } from "./cases/brands/brand.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      /*Add variaves de ambiente*/
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!!,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
  CategoryModule,BrandModule
  ]
})
export class AppModule {}
