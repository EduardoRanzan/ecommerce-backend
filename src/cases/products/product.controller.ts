import { Category } from '../categories/category.entity';
import { CategoryService } from '../categories/category.service';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(
    private readonly service: ProductService,
    private readonly categoryService: CategoryService
  ) {}

  @Get()
  findAll(): Promise<Product[]> {
      return this.service.findAll();
  }

  @Get('/:id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Product | null> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException(`Product with ID ${id} not found`, HttpStatus.NOT_FOUND);
    } else {
      return found;
    }
  }

  @Post()
  save(@Body() Product: Product): Promise<Product> {
    return this.service.save(Product);
  }

  @Put('/:id')
  async update(
          @Param('id', ParseUUIDPipe) id: string,
          @Body() product: Product
      ): Promise<Product> {
          const found = await this.service.findById(id);
  
          if (!found) {
          throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
          }
  
          product.id = id;
  
          return this.service.save(product);
  }

  @Delete('/:id')
  async remove(@Param('id', ParseUUIDPipe) id: string){
     const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException(`Product with ID ${id} not found`, HttpStatus.NOT_FOUND);
    } else {
      await this.service.remove(id);
    }
  }
}