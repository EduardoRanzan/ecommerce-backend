import { Customer } from "src/cases/customers/customer.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { OrderItem } from "./order-item.entity"

enum OrderStatus {
    NEW = 'NEW',
    SEPARATION= 'SEPARATION',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
    INVOICED = 'INVOICED',
    CANCELED = 'CANCELED'
}

@Entity('order')
export class Order {

    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @ManyToOne(()=> Customer, {eager: true, nullable: false})
    @JoinColumn({name: 'customerId'})
    customer: Customer

    @Column('decimal', {precision: 10, scale: 2, nullable: false})
    shipping: number

    @Column('enum', { enum: OrderStatus, default: OrderStatus.NEW, nullable: false })
    status: string

    @Column({nullable: false})
    total: number

    @OneToMany(() => OrderItem, (item) => item.order, { cascade: true, eager: true })
    items: OrderItem[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
