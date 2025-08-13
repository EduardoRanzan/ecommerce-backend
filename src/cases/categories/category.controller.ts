import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';

@Controller('categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.service.findAll();
  }

  @Get('/:id')
  findById(@Param('id', ParseUUIDPipe) id: string): Promise<Category | null> {
    return this.service.findById(id);
  }

  @Post()
  save(@Body() category: Category): Promise<Category> {
    return this.service.save(category);
  }

  @Delete('/:id')
  remove(@Param('id', ParseUUIDPipe) id: string){
    return this.service.remove(id)
  }
}
