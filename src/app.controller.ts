import { Controller, Param, Body, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import FormData from './formdata';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello/*id')
  getHello(@Param() params): object {
    const id = params.id ?? 0;
    return this.appService.getHello(id);
  }

  @Post('/hello/post')
  post(@Body() frm: FormData): string {
    this.appService.addData(frm);
    return 'form data was pushed!';
  }
}
