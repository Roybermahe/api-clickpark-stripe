import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { Zonas } from '../../database/entitys/zonas_plazas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ZonasRepository implements RepoGenericInterface<Zonas> {
  constructor(@Inject(Zonas.name) private readonly repo: Repository<Zonas>) {}

  async add(data: Zonas) {
    return await this.repo.save(data);
  }

  async delete(id: number) {
    return await this.repo.delete(id);
  }

  async find() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOne(id, {
      relations: ['horariosFuncionamiento', 'horarios'],
    });
  }

  async saveAll(data: Zonas[]) {
    return await this.repo.save(data);
  }
}
