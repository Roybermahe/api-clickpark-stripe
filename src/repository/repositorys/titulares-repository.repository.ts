import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { Repository } from 'typeorm';
import { Titulares } from '../../database/entitys/titulares.entity';

@Injectable()
export class TitularesRepository implements RepoGenericInterface<Titulares> {
  constructor(
    @Inject(Titulares.name) private readonly repo: Repository<Titulares>,
  ) {}

  async add(data: Titulares) {
    return await this.repo.save(data);
  }

  async delete(id: number) {
    return await this.repo.delete(id);
  }

  async find() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOne(id);
  }

  async saveAll(data: Titulares[]) {
    return await this.repo.save(data);
  }
}
