import { Repository } from "typeorm";
import { Brand } from "./brand.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common"

@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(Brand)
        private readonly     repository: Repository<Brand>
    ) {}

        findAll(): Promise<Brand[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<Brand | null> {
        const found = await this.repository.findOneBy({ id: id })

        if (!found) {
            throw new HttpException('No categories found', HttpStatus.NOT_FOUND);
        }
        return found;
    }

    save(Brand: Brand): Promise<Brand> {
        return this.repository.save(Brand);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}
