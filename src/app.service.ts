import { Injectable } from '@nestjs/common';


const data = [
  {name:'taro', mail:'taro@yamada', age:39},
  {name:'hanako', mail:'hanako@flower', age:28},
  {name:'sachiko', mail:'sachiko@happy', age:17}
]


@Injectable()
export class AppService {
  
  getHello(id:number): object {
    const n = id < 0 ? 0 : id >= data.length ? data.length - 1 : id;
    console.log(`id:${id} => n:${n}`)
    return {
      id:n,
      data:data[n],
      created:new Date()
    };
  }
}
