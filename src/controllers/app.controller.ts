import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from '../application/app.service';
import jwt_decode from 'jwt-decode';
import { Response } from 'express';
import { PayZonaService } from '../application/payZona.service';
import { ModelPayments } from '../model/modelPayments';
import { ParkingService } from 'src/application/parking.service';

@Controller('ClickPark/Payments')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly payZona: PayZonaService,
    private readonly parking: ParkingService
  ) {}

  @Get(':data')
  async getHello(@Res() res: Response, @Param('data') data: string) {
    const info = <ModelPayments>JSON.parse(JSON.stringify(jwt_decode(data)));
    console.log(info);
    if (info.method == 'zona') {
      const send = await this.payZona.pay(info);
      console.log(send);
      res.render('index', send);
    } else {
      res.render('sanzions', info);
    }
  }

  @Post('/create-checkout-session')
  async createCheckOut(@Body() data: userBody) {
    return await this.appService.createSesion(
      <string>JSON.parse(JSON.stringify(jwt_decode(data.token))).email,
      await this.payZona.calculatePay(
        JSON.parse(JSON.stringify(jwt_decode(data.token))),
      ),
      data.token,
    );
  }

  @Get('Parking/Pays/:email')
  async getParkingPays(@Param('email') email: string) {
    return await this.payZona.getMyParkingsPays(email);
  }

  @Post('Recargas')
  async pagarConRecarga(@Body() request: ModelPayments) {
    await this.parking.add(JSON.parse(JSON.stringify(request)));
    return await this.payZona.pagarZonaConRecarga(request);
  }
}

export interface userBody {
  token: string;
}
