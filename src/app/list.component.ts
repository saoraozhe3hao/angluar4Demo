import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `<div>列表页</div><a [routerLink]="['/detail', id]">Go to {{id}}</a>`  // 路由连接
})

export class ListComponent {
  id = 5;
  // 依赖注入
  constructor(private router: Router) {}
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/detail', 10]);
    }, 5000);
  }
}
