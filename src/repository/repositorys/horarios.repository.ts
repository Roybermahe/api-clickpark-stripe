import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { HorariosZonas } from '../../database/entitys/horarios-zonas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HorariosRepository implements RepoGenericInterface<HorariosZonas> {
  constructor(
    @Inject(HorariosZonas.name)
    private readonly repo: Repository<HorariosZonas>,
  ) {}

  async add(data: HorariosZonas) {
    return await this.repo.save(data);
  }

  async delete(id: number) {
    return await this.repo.delete(id);
  }

  async find() {
    return await this.repo.find({ loadRelationIds: true });
  }

  async findOne(id: number) {
    return await this.repo.findOne(id);
  }

  async saveAll(data: HorariosZonas[]) {
    return await this.repo.save(data);
  }
}
