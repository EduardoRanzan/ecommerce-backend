import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common"

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly     repository: Repository<Category>
    ) {}

        findAll(): Promise<Category[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<Category | null> {
        const found = await this.repository.findOneBy({ id: id })

        if (!found) {
            throw new HttpException('No categories found', HttpStatus.NOT_FOUND);
        }
        return found;
    }

    save(category: Category): Promise<Category> {
        return this.repository.save(category);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}
