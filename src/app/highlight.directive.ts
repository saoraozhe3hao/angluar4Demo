import { Directive, ElementRef, Renderer } from '@angular/core';

// 指令装饰器
@Directive({
  selector: '[highlight]',  // 指令选择器
})

// 指令类
export class HighlightDirective  {
  constructor(el: ElementRef, renderer: Renderer){
    renderer.setElementStyle(el.nativeElement, "backgroundColor", "yellow");
  }
}
