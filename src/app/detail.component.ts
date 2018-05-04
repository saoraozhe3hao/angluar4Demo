import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: '<div>详情页 {{id}}</div><a routerLink="/">List</a>'
})

export class DetailComponent {
  id: string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params: any) => this.id = params.id);
  }
}
