import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { cancelController } from './cancel.controller';
import { successController } from './success.controller';
import { applicationModule } from '../application/application.module';
import { sancionController } from './sancion.controller';
import { RecargasController } from "./recargas.controller";

@Module({
  imports: [applicationModule],
  controllers: [
    AppController,
    cancelController,
    successController,
    sancionController,
    RecargasController,
  ],
})
export class controllersModule {}
