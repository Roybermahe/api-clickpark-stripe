import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { SanzionesPayments } from '../../database/entitys/sanziones-payments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SanzionesPaymentsRepository
  implements RepoGenericInterface<SanzionesPayments> {
  constructor(
    @Inject(SanzionesPayments.name)
    private readonly repo: Repository<SanzionesPayments>,
  ) {}
  async add(data: SanzionesPayments) {
    return await this.repo.save(data);
  }

  async delete(id: number) {
    return await this.repo.delete(id);
  }

  async find() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOne({
      where: {
        parking: {
          id: id
        }
      }
    });
  }

  async saveAll(data: SanzionesPayments[]) {
    return await this.repo.save(data);
  }
}
