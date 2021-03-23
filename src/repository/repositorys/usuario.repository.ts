import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from '../../database/entitys/usuarios.entity';
import { RepoGenericInterface } from '../contracts/repo-generic.interface';

@Injectable()
export class UsuarioRepository implements RepoGenericInterface<Usuario> {
  constructor(
    @Inject(Usuario.name) private readonly repository: Repository<Usuario>,
  ) {}

  add(data: Usuario) {
    return this.repository.save(data);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  find() {
    return this.repository.find();
  }

  saveAll(data: Usuario[]) {
    return this.repository.save(data);
  }

  async findEmail(email: string) {
    return await this.repository.findOne({
      where: {
        email: email,
      },
    });
  }
}
