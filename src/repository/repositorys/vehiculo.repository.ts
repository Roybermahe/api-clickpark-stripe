import { Inject, Injectable } from '@nestjs/common';
import { Vehiculos } from '../../database/entitys/vehiculos.entity';
import { Repository } from 'typeorm';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';

@Injectable()
export class VehiculoRepository implements RepoGenericInterface<Vehiculos> {
  constructor(
    @Inject(Vehiculos.name) private readonly repository: Repository<Vehiculos>,
  ) {}

  async add(data: Vehiculos) {
    return await this.repository.save(data);
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async find() {
    return await this.repository.find({ relations: ['tipo'] });
  }

  async saveAll(data: Vehiculos[]) {
    return await this.repository.save(data);
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }

  async getUserVehiculo(userId: number) {
    return await this.repository.find({
      where: {
        usuario: {
          id: userId,
        },
      },
    });
  }
}
