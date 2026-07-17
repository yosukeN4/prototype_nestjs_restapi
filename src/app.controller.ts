import { Controller, Param, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


@Get('/hello/*id')
getHello(@Param() params): object {
  const id = params.id?? 0
  return this.appService.getHello(id)
  }
}

 
