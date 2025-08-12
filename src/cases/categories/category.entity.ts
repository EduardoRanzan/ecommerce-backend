import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity(/* categoria <- se quiser especificar uma tabela q não tenho o exato nome da classe -_- */)
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60, nullable: false })
    name: string
}

/* exports default Category */