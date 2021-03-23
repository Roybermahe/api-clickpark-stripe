import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { Parking } from '../../database/entitys/parking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParkingRepository implements RepoGenericInterface<Parking> {
  constructor(
    @Inject(Parking.name) private readonly repo: Repository<Parking>,
  ) {}

  async add(data: Parking) {
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

  async saveAll(data: Parking[]) {
    return await this.repo.save(data);
  }

  async findWitVehicle(idVehicle: number) {
    return await this.repo.findOne({
      where: {
        vehiculo: {
          id: idVehicle,
        },
      },
    });
  }
}
