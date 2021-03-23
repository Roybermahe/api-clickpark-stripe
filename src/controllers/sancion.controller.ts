import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from '../application/app.service';
import jwt_decode from 'jwt-decode';
import { userBody } from './app.controller';
import { Response } from 'express';
import { PaySanzionService } from '../application/paySanzion.service';

@Controller('ClickPark/Sancion')
export class sancionController {
  constructor(
    private readonly appService: AppService,
    private readonly paySanc: PaySanzionService,
  ) {}

  @Get(':data')
  async createView(@Res() res: Response, @Param('data') data: string) {
    return res.render(
      'sanzions',
      await this.paySanc.preparedPay(
        JSON.parse(JSON.stringify(jwt_decode(data))),
      ),
    );
  }

  @Post('/create-checkout-session')
  async createCheckOut(@Body() data: userBody) {
    return await this.appService.paySanzion(
      <string>JSON.parse(JSON.stringify(jwt_decode(data.token))).email,
      3,
      data.token,
    );
  }
}
