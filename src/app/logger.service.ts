import { Injectable } from '@angular/core';

// 服务装饰器
@Injectable()

// 服务类
export class LoggerService  {
  constructor(){ }
  debug(msg: string){
    console.log(msg)
  }
}
