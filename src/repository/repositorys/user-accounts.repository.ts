import { RepoGenericInterface } from '../contracts/repo-generic.interface';
import { UserAccounts } from '../../database/entitys/user-accounts.entity';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

export class UserAccountsRepository
  implements RepoGenericInterface<UserAccounts> {
  constructor(
    @Inject(UserAccounts.name) private readonly repo: Repository<UserAccounts>,
  ) {}

  async add(data: UserAccounts) {
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

  async saveAll(data: UserAccounts[]) {
    return await this.repo.save(data);
  }

  async findEmail(email: string) {
    return await this.repo.findOne({
      where: {
        email: email,
      },
    });
  }

  async findUsename(username: string) {
    return await this.repo.findOne({
      where: {
        username: username,
      },
    });
  }
}
