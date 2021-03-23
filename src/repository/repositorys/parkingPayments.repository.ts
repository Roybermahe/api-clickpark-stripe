import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { ParkingPayments } from '../../database/entitys/parking-payments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParkingPaymentsRepository
  implements RepoGenericInterface<ParkingPayments> {
  constructor(
    @Inject(ParkingPayments.name)
    private readonly repo: Repository<ParkingPayments>,
  ) {}
  async add(data: ParkingPayments) {
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

  async saveAll(data: ParkingPayments[]) {
    return await this.repo.save(data);
  }

  async searchForEmail(correo: string) {
    return this.repo.find({
      relations: ['parking'],
      where: {
        correo: correo,
      },
    });
  }
}
