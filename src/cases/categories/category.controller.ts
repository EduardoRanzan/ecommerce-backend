import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common"

@Controller('categores')
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
}