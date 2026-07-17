import { Controller, Render, Param, Body, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import FormData from './formdata';
import MsgData from './Msgdata';

const msgs: MsgData[] = []

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthcheck')
  healthcheck(): string {
    return this.appService.healthcheck();
  } 

  @Get('/hello/*id')
  getHello(@Param() params): object {
    const id: number = params.id ?? 0;
    return this.appService.getHello(id);
  }

  @Post('/hello/post')
  post(@Body() frm: FormData): string {
    this.appService.addData(frm);
    return 'form data was pushed!';
  }

  @Get()
  @Render('index')
  index() {
    console.log(msgs)
    return {
      title: 'NestJS-MVC',
      message: 'NestJS + hbs = MVC application!',
      data:msgs
    }
  }


  @Post()
  @Render('index')
  form(@Body() msg:MsgData) {
    msg.posted = new Date()
    msgs.unshift(msg)
    return {
      title: 'NestJS-MVC',
      message: 'posted: ' + JSON.stringify(msg),
      data:msgs
    }
  }


}
