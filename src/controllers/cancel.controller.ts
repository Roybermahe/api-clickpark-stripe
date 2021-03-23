import { Controller, Get, Render } from '@nestjs/common';

@Controller('ClickPark/Cancel')
export class cancelController {
  @Get()
  @Render('cancel')
  succesView() {
    return {};
  }
}
