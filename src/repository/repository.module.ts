import { Module } from '@nestjs/common';
import { databaseModule } from '../database/database.module';
import { UsuarioRepository } from './repositorys/usuario.repository';
import { VehiculoRepository } from './repositorys/vehiculo.repository';
import { TiposVehiculosRepository } from './repositorys/tipos-vehiculos.repository';
import { TiposZonasRepository } from './repositorys/tipos-zonas.repository';
import { ZonasRepository } from './repositorys/zonas.repository';
import { HorariosRepository } from './repositorys/horarios.repository';
import { VigilanteRepository } from './repositorys/vigilante.repository';
import { HorarioFuncionamientoRepository } from './repositorys/horarioFuncionamiento.repository';
import { UserAccountsRepository } from './repositorys/user-accounts.repository';
import { ConductoresRepository } from './repositorys/conductores.repository';
import { TitularesRepository } from './repositorys/titulares-repository.repository';
import { SanzionesRepository } from './repositorys/sanziones.repository';
import { SanzionesPaymentsRepository } from './repositorys/sanzionesPayments.repository';
import { ParkingRepository } from './repositorys/parking.repository';
import { ParkingPaymentsRepository } from './repositorys/parkingPayments.repository';
import { HistorialRecargasRepository } from "./repositorys/historial-recargas.repository";
import { RecargasRepository } from "./repositorys/recargas.repository";

@Module({
  imports: [databaseModule],
  exports: [
    UsuarioRepository,
    VehiculoRepository,
    TiposVehiculosRepository,
    TiposZonasRepository,
    ZonasRepository,
    HorariosRepository,
    VigilanteRepository,
    HorarioFuncionamientoRepository,
    UserAccountsRepository,
    ConductoresRepository,
    TitularesRepository,
    SanzionesRepository,
    SanzionesPaymentsRepository,
    ParkingRepository,
    ParkingPaymentsRepository,
    HistorialRecargasRepository,
    RecargasRepository,
  ],
  providers: [
    UsuarioRepository,
    VehiculoRepository,
    TiposVehiculosRepository,
    TiposZonasRepository,
    ZonasRepository,
    HorariosRepository,
    VigilanteRepository,
    HorarioFuncionamientoRepository,
    UserAccountsRepository,
    ConductoresRepository,
    TitularesRepository,
    SanzionesRepository,
    SanzionesPaymentsRepository,
    ParkingRepository,
    ParkingPaymentsRepository,
    HistorialRecargasRepository,
    RecargasRepository,
  ],
})
export class repositoryModule {}
