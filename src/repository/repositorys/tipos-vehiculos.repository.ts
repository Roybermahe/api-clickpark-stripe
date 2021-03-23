import { Inject, Injectable } from '@nestjs/common';
import { TiposVehiculos } from '../../database/entitys/tipos-vehiculos.entity';
import { Repository } from 'typeorm';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';

@Injectable()
export class TiposVehiculosRepository
  implements RepoGenericInterface<TiposVehiculos> {
  constructor(
    @Inject(TiposVehiculos.name)
    private readonly repository: Repository<TiposVehiculos>,
  ) {}

  add(data: TiposVehiculos) {
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

  saveAll(data: TiposVehiculos[]) {
    return this.repository.save(data);
  }
}
