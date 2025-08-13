import { Product } from './product.entity';
import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.service.findAll();
  }

  @Get('/:id')
  findById(@Param('id', ParseUUIDPipe) id: string): Promise<Product | null> {
    return this.service.findById(id);
  }

  @Post()
  save(@Body() Product: Product): Promise<Product> {
    return this.service.save(Product);
  }

  @Delete('/:id')
  remove(@Param('id', ParseUUIDPipe) id: string){
    return this.service.remove(id)
  }
}
