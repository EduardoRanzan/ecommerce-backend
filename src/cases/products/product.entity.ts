import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../categories/category.entity';
import { Brand } from '../brands/brand.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, nullable: false })
  name: string;
  
  @Column()
  description: string;

  @Column({ nullable: false})
  price: number

  @Column({ nullable: false, default: true })
  active: boolean

  @ManyToOne(() => Category , { eager: true /*habilita para retornar no findAll etc*/, nullable: false})
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ManyToOne(() => Brand, { eager: true, nullable: true })
  @JoinColumn({ name: 'brandId' })
  brand: Brand;
}