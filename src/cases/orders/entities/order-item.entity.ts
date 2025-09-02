import { Product } from "src/cases/products/product.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Order } from "./order.entity"

@Entity('order')
export class OrderItem {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Order)
    @JoinColumn({ name: 'orderId' })
    order: Order

    @ManyToOne(() => Product, { eager: true, nullable: false })
    @JoinColumn({ name: 'productId' })
    product: Product

    @Column({ nullable: false })
    quantity: number

    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    value: number
}
