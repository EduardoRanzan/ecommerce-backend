import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { State } from "./state.entity";

@Entity()
export class City {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60, nullable: false })
    name: string

    @Column({ length: 7, nullable: false })
    ibge: string

    @ManyToOne(() => State , { eager: true, nullable: false})
    @JoinColumn({ name: 'stateId' })
    state: State;
}
