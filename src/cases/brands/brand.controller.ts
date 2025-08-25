import { Brand } from "./brand.entity";
import { BrandService } from "./brand.service";
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common"

@Controller('brands')
export class BrandController {
    constructor(
        private readonly service: BrandService
    ) {}

    @Get()
    findAll(): Promise<Brand[]> {
        return this.service.findAll();
    }

    @Get('/:id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Brand | null>{
        const found = await this.service.findById(id);
        if (!found) {
            throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
        } else {
            return found;   
        }  
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Brand: Brand) :Promise<Brand> {
        return this.service.save(Brand);
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() Brand: Brand
    ): Promise<Brand> {
        const found = await this.service.findById(id);
        if (!found) {
            throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
        } else {
            Brand.id = id;
            
            return this.service.save(Brand);
        }
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
        const found = await this.service.findById(id);
        if (!found) {
            throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
        } else {
            await this.service.remove(id);
        }  
    }
}