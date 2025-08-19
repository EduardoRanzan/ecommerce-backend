import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common"

@Controller('categories')
export class CategoryController {
    constructor(
        private readonly service: CategoryService
    ) {}

    @Get()
    findAll(): Promise<Category[]> {
        return this.service.findAll();
    }

    @Get('/:id')
    findById(@Param('id', ParseUUIDPipe) id: string): Promise<Category | null>{
        return this.service.findById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Category: Category) :Promise<Category> {
        return this.service.save(Category);
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() category: Category
    ): Promise<Category> {
        category.id = id;
        
        return this.service.save(category);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
        await this.service.remove(id);

    }
}