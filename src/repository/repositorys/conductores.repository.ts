import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { personaConductora } from '../../database/entitys/persona-conductora.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConductoresRepository
  implements RepoGenericInterface<personaConductora> {
  constructor(
    @Inject(personaConductora.name)
    private readonly repo: Repository<personaConductora>,
  ) {}

  async add(data: personaConductora) {
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

  async saveAll(data: personaConductora[]) {
    return await this.repo.save(data);
  }
}
