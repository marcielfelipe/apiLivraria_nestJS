/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import {Livro} from './livro.model'


@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro)
    private livroRepository: Repository<Livro>,
  ){}

  async obterTodos(): Promise<Livro[]>{
    return this.livroRepository.find()
  }
  async obterUm(id: number): Promise<Livro>{
    return this.livroRepository.findOne({where:{id}})
  }
  async criar(livro: Livro){
    this.livroRepository.save(
      this.livroRepository.create(livro)
    )
  }
  async alterar(livro: Livro){
    return this.livroRepository.update({id:livro.id},livro)
  }

  async apagar(id: number){
    const livro: Livro = await this.obterUm(id)
    this.livroRepository.remove(livro)
  }
}
