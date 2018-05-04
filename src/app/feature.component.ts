import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'feature-one',
  // 外联模板
  template: require('./template/feature.component.html')
})

export class FeatureComponent  {
  // 输入装饰器，声明可以从父组件接收的参数
  @Input() message: string;
  // 输出装饰器，声明本数据可以发出的事件
  @Output() change = new EventEmitter();
  show : boolean;
  constructor(){
    console.log("constructor");
  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngOnInit(){
    this.show = true;
    console.log("ngOnInit");
  }
  handle(){
    this.show = !this.show;
    // 发出事件
    this.change.emit("from child");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
}
