import { Component } from '@angular/core'
import { LoggerService } from './logger.service'


// 组件装饰器
@Component({
  selector: 'app-root',  // 组件选择器
  // 内联模板，[]属性绑定, {{}}插值绑定，[{}]双向绑定
  template: `<h1 highlight [style.color]="color">Hello {{name}}</h1><input [(value)]="name">
  <feature-one [message]="name" (change)="childChange($event)"></feature-one> <!-- []传给子组件的参数，() 接收子组件发出的事件 -->
  <router-outlet></router-outlet>`, // 盛放子路由组件
  providers: [LoggerService] // 声明服务，也可以在主模块中声明。服务会已单例的形式向子组件传递，除非子组件自己引入该服务
})

// 组件类
export class AppComponent  {
  name = 'Angular';  // viewModel
  color = 'red';
  // 依赖注入
  constructor(private logger: LoggerService){
    // 注入的 logger 会自动赋给 this
    this.name = "Angular 4";
  }
  ngOnInit(){
    this.logger.debug("初始化");
  }
  childChange(message: string){
    this.name = message;
  }
}
