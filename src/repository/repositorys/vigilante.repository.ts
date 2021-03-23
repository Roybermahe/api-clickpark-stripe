import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { Vigilantes } from '../../database/entitys/vigilantes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VigilanteRepository implements RepoGenericInterface<Vigilantes> {
  constructor(
    @Inject(Vigilantes.name)
    private readonly repository: Repository<Vigilantes>,
  ) {}
  add(data: Vigilantes) {
    return this.repository.save(data);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }

  find() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  saveAll(data: Vigilantes[]) {
    return this.repository.save(data);
  }
}
