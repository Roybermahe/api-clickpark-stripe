import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { HistorialRecargas } from '../../database/entitys/historial-recargas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistorialRecargasRepository
  implements RepoGenericInterface<HistorialRecargas> {
  constructor(
    @Inject(HistorialRecargas.name) private repo: Repository<HistorialRecargas>,
  ) {}

  async add(data: HistorialRecargas) {
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

  async saveAll(data: HistorialRecargas[]) {
    return await this.repo.save(data);
  }
}
