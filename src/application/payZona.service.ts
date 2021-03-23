import { Injectable } from '@nestjs/common';
import { ParkingPaymentsRepository } from '../repository/repositorys/parkingPayments.repository';
import { ParkingRepository } from '../repository/repositorys/parking.repository';
import { ModelPayments } from '../model/modelPayments';
import { UsuarioRepository } from '../repository/repositorys/usuario.repository';
import { ZonasRepository } from '../repository/repositorys/zonas.repository';
import { HorarioFuncionamiento } from '../database/entitys/horario-funcionamiento.entity';
import { HorariosZonas } from '../database/entitys/horarios-zonas.entity';
import { VehiculoRepository } from '../repository/repositorys/vehiculo.repository';
import { ParkingPayments } from '../database/entitys/parking-payments.entity';
import { RecargasRepository } from '../repository/repositorys/recargas.repository';
import { HistorialRecargasRepository } from '../repository/repositorys/historial-recargas.repository';
import { ParkingService } from './parking.service';
const sign = require('jwt-encode');

export const pad = (i: number): string => (i < 10 ? `0${i}` : `${i}`);
@Injectable()
export class PayZonaService {
  constructor(
    private readonly payRepo: ParkingPaymentsRepository,
    private readonly parkinRepo: ParkingRepository,
    private readonly zonaRepo: ZonasRepository,
    private readonly userRepo: UsuarioRepository,
    private readonly vehiculoRepo: VehiculoRepository,
    private readonly recargasRepo: RecargasRepository,
    private readonly historialRepo: HistorialRecargasRepository,
    private readonly parkingService: ParkingService,
  ) {}

  async getMyParkingsPays(email: string) {
    try {
      return await this.payRepo.searchForEmail(email);
    } catch (e) {
      return null;
    }
  }

  async pay(request: ModelPayments) {
    try {
      let payValue = await this.calculatePay(request);
      console.log(payValue);
      return {
        correo: request.email,
        costo: payValue,
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

  async calculatePay(request: ModelPayments) {
    try {
      const zona = await this.zonaRepo.findOne(request.idZona);
      if (this.calculateDay(zona.horariosFuncionamiento)) {
        const veamos = await this.valorTiempoCobro(
          <number>request.tiempo,
          zona.horarios,
        );
        return veamos;
      } else {
        return 0;
      }
    } catch (e) {
      return null;
    }
  }

  async registerPaymentSucces(request: ModelPayments) {
    try {
      const parking = await this.parkinRepo.findWitVehicle(request.idVehiculo);
      const parkinPayment = new ParkingPayments();
      parkinPayment.price = `${await this.calculatePay(request)}`;
      parkinPayment.parking = parking;
      parkinPayment.correo = request.email;
      await this.payRepo.add(parkinPayment);
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  private async valorTiempoCobro(tiempo: number, hrsZonas: HorariosZonas[]) {
    try {
      return hrsZonas.find((item) => item.tiempo >= tiempo).tarifa;
    } catch (err) {
      return undefined;
    }
  }

  private weekday() {
    let d = 'Dom';
    switch (new Date().getDay()) {
      case 0:
        d = 'Dom';
        break;
      case 1:
        d = 'Lun';
        break;
      case 2:
        d = 'Mar';
        break;
      case 3:
        d = 'Mie';
        break;
      case 4:
        d = 'Jue';
        break;
      case 5:
        d = 'Vie';
        break;
      case 6:
        d = 'Sab';
        break;
    }
    return d;
  }

  private calculateDay(hrFunc: HorarioFuncionamiento[]) {
    let hr = hrFunc.find((hr) => hr.diasSemana.includes(this.weekday()));
    if (hr.diasSemana.includes('FREE')) {
      return false;
    }
    let horario = hr.HorariosJornada.split(';');
    return (
      this.returTimeDayString() >= horario[0] &&
      this.returTimeDayString() <= horario[1]
    );
  }

  private returTimeDayString() {
    let date = new Date();
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
      date.getSeconds(),
    )}`;
  }

  async pagarZonaConRecarga(request: ModelPayments) {
    try {
      const recarga = await this.recargasRepo.searchForEmail(request.email);
      if (!recarga)
        return {
          message:
            'Debes realizar una recarga, para pagar tu parking con esta opción.',
        };
      const parking = await this.parkinRepo.findWitVehicle(request.idVehiculo);
      const parkinPayment = new ParkingPayments();
      const payvalue = await this.calculatePay(request);
      if (recarga.valor >= payvalue) {
        recarga.valor -= payvalue;
        parkinPayment.price = `${payvalue}`;
        parkinPayment.parking = parking;
        parkinPayment.correo = request.email;
        await this.payRepo.add(parkinPayment);
        await this.historialRepo.add({
          valor: recarga.valor,
          recarga: recarga,
        });
        return {
          message: `Se acaba de descontar ${payvalue} euros, de tu monedero.`,
        };
      } else {
        return { message: `Por favor recargue su monedero.` };
      }
    } catch (e) {
      return { message: `Ocurrio un error.` };
    }
  }
}
