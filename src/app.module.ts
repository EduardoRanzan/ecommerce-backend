import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { CategoryModule } from "./cases/categories/category.module";
import { BrandModule } from "./cases/brands/brand.module";
import { ProductModule } from "./cases/products/product.module";
import { CityModule } from "./cases/cities/modules/city.module";
import { CustomerModule } from "./cases/customers/customer.module";
import { OrderModule } from "./cases/orders/modules/modules/order.module";
import { SupabaseModule } from "./lib/supabase/supabase.module";
import { AuthModule } from "./cases/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      /*Add variaves de ambiente*/
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      logging: false, //habilitar para ver as querys no console
    }),
  CategoryModule,BrandModule,ProductModule,CityModule,CustomerModule,OrderModule,SupabaseModule,AuthModule
  ]
})
export class AppModule {}
