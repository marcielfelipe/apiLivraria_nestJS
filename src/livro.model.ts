/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,  } from 'typeorm'

@Entity('livro')
export class Livro {
  @PrimaryGeneratedColumn('increment')
  id: number
  
  @Column({
    length:60
  })
  codigo: string
  @Column()
  nome: string
  @Column({
    type: 'float'
  })
  preco: number

}
