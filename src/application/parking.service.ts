import { Injectable } from '@nestjs/common';
import { messageGenericInterface } from './base/message-generic.interface';
import { Parking } from '../database/entitys/parking.entity';
import { serviceGeneric } from './base/service-generic.contract';
import { ParkingRepository } from '../repository/repositorys/parking.repository';
import { VehiculoRepository } from '../repository/repositorys/vehiculo.repository';
import { ZonasRepository } from '../repository/repositorys/zonas.repository';

@Injectable()
export class ParkingService
  implements serviceGeneric<ParkingDTO, updateParkingDTO, messageParking> {
  constructor(
    private readonly repository: ParkingRepository,
    private readonly vehiculosRepo: VehiculoRepository,
    private readonly zonaVehiculo: ZonasRepository,
  ) {}

  async add(request: ParkingDTO): Promise<messageParking> {
    try {
      let parking = await this.repository.findWitVehicle(request.idVehiculo);
      if (!parking) {
        parking = new Parking();
        let vehiculo = await this.vehiculosRepo.findOne(request.idVehiculo);
        if (!vehiculo)
          return <messageParking>{ message: 'Vehiculo no existe.' };
        let zona = await this.zonaVehiculo.findOne(request.idZona);
        if (!zona) return <messageParking>{ message: 'Esta zona no existe.' };
        parking.vehiculo = vehiculo;
        parking.zona = zona;
      }
      parking.horaInicio = request.horaInicio;
      parking.horaFinalizacion = request.horaFinalizacion;
      parking.tiempo = request.tiempo;
      parking.lat = request.lat;
      parking.long = request.long;
      await this.repository.add(parking);
      return <messageParking>{ message: 'Vehiculo estacionado en esta zona.' };
    } catch (e) {
      return <messageParking>{ message: 'Ocurrio un error.' };
    }
  }

  async deleteOne(id: number): Promise<messageParking> {
    try {
      await this.repository.delete(id);
      return <messageParking>{ message: 'Parking borrado.' };
    } catch (e) {
      return <messageParking>{ message: 'Ocurrio un error.' };
    }
  }

  async getAll(): Promise<messageParking> {
    try {
      return <messageParking>{ getAll: await this.repository.find() };
    } catch (e) {
      return <messageParking>{ message: 'Ocurrio un error.' };
    }
  }

  async getOne(id: number): Promise<messageParking> {
    try {
      return <messageParking>{ getOne: await this.repository.findOne(id) };
    } catch (e) {
      return <messageParking>{ message: 'Ocurrio un error.' };
    }
  }

  async updateOne(request: updateParkingDTO): Promise<messageParking> {
    try {
      let parking = await this.repository.findOne(request.idParking);
      if (!parking) return <messageParking>{ message: 'Parking invalido.' };
      parking.horaFinalizacion = request.horaFinalizacion;
      parking.tiempo = request.tiempo;
      await this.repository.add(parking);
      return <messageParking>{
        message: 'Su vehiculo ahora se encuentra en esta zona.',
      };
    } catch (e) {
      return <messageParking>{ message: 'Ocurrio un error.' };
    }
  }
}

export class ParkingDTO {
  horaInicio: string;

  tiempo: number;

  horaFinalizacion: string;

  estado?: string;

  idZona: number;

  idVehiculo: number;

  lat: string;

  long: string;
}

export class updateParkingDTO {
  idParking: number;

  tiempo: number;

  horaFinalizacion: string;
}

export class messageParking implements messageGenericInterface<Parking> {}
