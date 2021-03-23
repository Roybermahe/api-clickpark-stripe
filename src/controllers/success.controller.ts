import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import jwt_decode from 'jwt-decode';
import { ParkingService } from '../application/parking.service';
import { PayZonaService } from '../application/payZona.service';
import { recargaDTO, RecargaService } from '../application/recarga.service';
import { PaySanzionService } from '../application/paySanzion.service';

@Controller('ClickPark/Success')
export class successController {
  constructor(
    private readonly recargaService: RecargaService,
    private readonly parkingService: ParkingService,
    private readonly payZona: PayZonaService,
    private readonly paySanc: PaySanzionService,
  ) {}

  @Get(':data')
  async succesView(@Res() res: Response, @Param('data') data: string) {
    await this.parkingService.add(JSON.parse(JSON.stringify(jwt_decode(data))));
    await this.payZona.registerPaymentSucces(
      JSON.parse(JSON.stringify(jwt_decode(data))),
    );
    return res.render('success', {
      correo: JSON.parse(JSON.stringify(jwt_decode(data))).email,
    });
  }

  @Get('Monedero/:data2')
  async succesMonederoView(@Res() res: Response, @Param('data2') data: string) {
    const info = <recargaDTO>JSON.parse(JSON.stringify(jwt_decode(data)));
    await this.recargaService.guardarRecarga(info);
    return res.render('success-monedero');
  }

  @Get('Sancion/:data3')
  async successSancionView(@Res() res: Response, @Param('data3') data: string) {
    await this.paySanc.registerPay(
      JSON.parse(JSON.stringify(jwt_decode(data))),
    );
    return res.render('success-sancion');
  }
}
