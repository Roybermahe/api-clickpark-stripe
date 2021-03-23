import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { RecargaService } from '../application/recarga.service';
import jwt_decode from 'jwt-decode';
import { userBody } from './app.controller';
import { AppService } from '../application/app.service';

@Controller('ClickPark/Recargas')
export class RecargasController {
  constructor(
    private readonly appService: AppService,
    private readonly recargaService: RecargaService,
  ) {}
  @Get(':data')
  async getViewData(@Res() res: Response, @Param('data') data: string) {
    return res.render(
      'monedero',
      await this.recargaService.recargaMonedero(
        JSON.parse(JSON.stringify(jwt_decode(data))),
      ),
    );
  }

  @Post('/create-checkout-session')
  async createCheckOut(@Body() data: userBody) {
    console.log(jwt_decode(data.token));
    return await this.appService.reloadMonedero(
      <string>JSON.parse(JSON.stringify(jwt_decode(data.token))).email,
      <number>JSON.parse(JSON.stringify(jwt_decode(data.token))).valorRecarga,
      data.token,
    );
  }

  @Get('User/Recargas/:userId')
  async getUserDataId(@Param('userId') userId: number) {
    return await this.recargaService.getUserData(userId);
  }
}
