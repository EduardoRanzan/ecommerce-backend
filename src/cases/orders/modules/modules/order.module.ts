import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { Order } from "../../entities/order.entity";
import { OrderItem } from "../../entities/order-item.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem])],
  providers: [],
  controllers: [],
})

export class OrderModule {}