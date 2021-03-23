import { Injectable } from '@nestjs/common';
import { ModelPayments } from '../model/modelPayments';
import { VehiculoRepository } from '../repository/repositorys/vehiculo.repository';
import { SanzionesPaymentsRepository } from '../repository/repositorys/sanzionesPayments.repository';
import { SanzionesRepository } from '../repository/repositorys/sanziones.repository';
const sign = require('jwt-encode');

@Injectable()
export class PaySanzionService {
  constructor(
    private readonly sanzionPay: SanzionesPaymentsRepository,
    private readonly sanzionRepo: SanzionesRepository,
    private readonly vehiculoRepo: VehiculoRepository,
  ) {}

  async preparedPay(request: ModelPayments) {
    try {
      let payOut = this.sanzionPay.findOne(request.idSanzion);
      return {
        correo: request.email,
        costo: 3,
        vehiculo: (
          await this.vehiculoRepo.findOne(request.idVehiculo)
        ).matricula.toUpperCase(),
        tok: sign(request, 'secret'),
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async registerPay(request: ModelPayments) {
    try {
      await this.sanzionPay.add({
        correo: request.email,
        price: '3',
        parking: await this.sanzionRepo.findOne(request.idSanzion),
      });
    } catch (e) {
      console.log(e);
    }
  }
}
