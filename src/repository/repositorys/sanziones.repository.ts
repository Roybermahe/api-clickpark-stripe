import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { Sanziones } from '../../database/entitys/sanziones.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SanzionesRepository implements RepoGenericInterface<Sanziones> {
  constructor(
    @Inject(Sanziones.name) private readonly repo: Repository<Sanziones>,
  ) {}

  async add(data: Sanziones) {
    return await this.repo.save(data);
  }

  async delete(id: number) {
    return await this.repo.delete(id);
  }

  async find() {
    return await this.repo.find({
      relations: ['vehiculo', 'titular', 'conductor'],
    });
  }

  async findOne(id: number) {
    return await this.repo.findOne(id, {
      relations: ['vehiculo', 'titular', 'conductor'],
    });
  }

  async saveAll(data: Sanziones[]) {
    return await this.repo.save(data);
  }
}
