import { Connection } from 'typeorm';

import { Vehiculos } from '../entitys/vehiculos.entity';
import { Usuario } from '../entitys/usuarios.entity';
import { TiposVehiculos } from '../entitys/tipos-vehiculos.entity';
import { TiposZona } from '../entitys/tipos_zona.entity';
import { Zonas } from '../entitys/zonas_plazas.entity';
import { HorariosZonas } from '../entitys/horarios-zonas.entity';
import { Vigilantes } from '../entitys/vigilantes.entity';
import { HorarioFuncionamiento } from '../entitys/horario-funcionamiento.entity';
import { UserAccounts } from '../entitys/user-accounts.entity';
import { Titulares } from '../entitys/titulares.entity';
import { personaConductora } from '../entitys/persona-conductora.entity';
import { Sanziones } from '../entitys/sanziones.entity';
import { SanzionesPayments } from '../entitys/sanziones-payments.entity';
import { Parking } from '../entitys/parking.entity';
import { ParkingPayments } from '../entitys/parking-payments.entity';
import { Recargas } from '../entitys/recargas.entity';
import { HistorialRecargas } from '../entitys/historial-recargas.entity';

export const vigilantes = [
  {
    provide: Vigilantes.name,
    useFactory: (connection: Connection) =>
      connection.getRepository(Vigilantes),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const tiposZonas = [
  {
    provide: TiposZona.name,
    useFactory: (connection: Connection) => connection.getRepository(TiposZona),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const zonas = [
  {
    provide: Zonas.name,
    useFactory: (connection: Connection) => connection.getRepository(Zonas),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const horariosZonas = [
  {
    provide: HorariosZonas.name,
    useFactory: (connection: Connection) =>
      connection.getRepository(HorariosZonas),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const horarioFuncionamiento = [
  {
    provide: HorarioFuncionamiento.name,
    useFactory: (connection: Connection) =>
      connection.getRepository(HorarioFuncionamiento),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const tiposVehiculos = [
  {
    provide: TiposVehiculos.name,
    useFactory: (connection: Connection) =>
      connection.getRepository(TiposVehiculos),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const vehiculosProvider = [
  {
    provide: Vehiculos.name,
    useFactory: (connection: Connection) => connection.getRepository(Vehiculos),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const usuarioProvider = [
  {
    provide: Usuario.name,
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const userAccounts = [
  {
    provide: UserAccounts.name,
    useFactory: (connection: Connection) =>
      connection.getRepository(UserAccounts),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const titulares = [
  {
    provide: Titulares.name,
    useFactory: (connection: Connection) => connection.getRepository(Titulares),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const conductores = [
  {
    provide: personaConductora.name,
    useFactory: (connection: Connection) =>
      connection.getRepository(personaConductora),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const sanziones = [
  {
    provide: Sanziones.name,
    useFactory: (connection: Connection) => connection.getRepository(Sanziones),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const sanzionesPayments = [
  {
    provide: SanzionesPayments.name,
    useFactory: (connection: Connection) =>
      connection.getRepository(SanzionesPayments),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const parking = [
  {
    provide: Parking.name,
    useFactory: (connection: Connection) => connection.getRepository(Parking),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const parkingPayments = [
  {
    provide: ParkingPayments.name,
    useFactory: (connection: Connection) =>
      connection.getRepository(ParkingPayments),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const recargas = [
  {
    provide: Recargas.name,
    useFactory: (connection: Connection) => connection.getRepository(Recargas),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const historialRecargas = [
  {
    provide: HistorialRecargas.name,
    useFactory: (connection: Connection) =>
      connection.getRepository(HistorialRecargas),
    inject: ['DATABASE_CONNECTION'],
  },
];
