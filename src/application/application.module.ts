import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PayZonaService } from './payZona.service';
import { PaySanzionService } from './paySanzion.service';
import { repositoryModule } from '../repository/repository.module';
import { ParkingService } from './parking.service';
import { RecargaService } from './recarga.service';

@Module({
  imports: [repositoryModule],
  providers: [
    AppService,
    PayZonaService,
    PaySanzionService,
    ParkingService,
    RecargaService,
  ],
  exports: [
    AppService,
    PayZonaService,
    PaySanzionService,
    ParkingService,
    RecargaService,
  ],
})
export class applicationModule {}
