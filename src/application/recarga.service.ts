import { Injectable } from '@nestjs/common';
import { RecargasRepository } from '../repository/repositorys/recargas.repository';
import { HistorialRecargasRepository } from '../repository/repositorys/historial-recargas.repository';
import { UserAccountsRepository } from '../repository/repositorys/user-accounts.repository';
const sign = require('jwt-encode');

@Injectable()
export class RecargaService {
  constructor(
    private recargaRepo: RecargasRepository,
    private historialRepo: HistorialRecargasRepository,
    private userRepo: UserAccountsRepository,
  ) {}

  async getUserData(userId: number) {
    try {
      return await this.recargaRepo.searchForUser(userId);
    } catch (e) {
      return null;
    }
  }

  async guardarRecarga(request: recargaDTO) {
    try {
      console.log(request.userId);
      const ultRec = await this.recargaRepo.searchForUser(request.userId);
      const User = await this.userRepo.findOne(request.userId);
      if (ultRec) {
        ultRec.historial.push({
          recarga: ultRec,
          valor: ultRec.valor,
        })
      }
      await this.recargaRepo.add({
        valor: request.valorRecarga,
        usuario: User,
      });
      console.log('exito.');
    } catch (e) {
      console.log(e);
    }
  }

  async recargaMonedero(request: recargaDTO) {
    try {
      const user = await this.userRepo.findOne(request.userId);
      return {
        costo: request.valorRecarga,
        correo: user.email,
        tok: sign({ ...request, email: user.email }, 'secret'),
      };
    } catch (e) {}
  }
}

export class recargaDTO {
  userId: number;
  valorRecarga: number;
}
