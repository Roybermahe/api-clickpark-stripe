import { Inject, Injectable } from '@nestjs/common';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { Recargas } from '../../database/entitys/recargas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecargasRepository implements RepoGenericInterface<Recargas> {
  constructor(@Inject(Recargas.name) private repo: Repository<Recargas>) {}

  async add(data: Recargas) {
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

  async saveAll(data: Recargas[]) {
    return await this.repo.save(data);
  }

  async searchForUser(userId: number) {
    return await this.repo.findOne({
      relations: ['historial'],
      where: {
        usuario: {
          id: userId,
        },
      },
    });
  }

  async searchForEmail(email: string) {
    return await this.repo.findOne({
      relations: ['historial'],
      where: {
        usuario: {
          email: email,
        },
      },
    });
  }
}
