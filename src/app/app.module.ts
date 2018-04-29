import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';

import { HighlightDirective } from './highlight.directive';
import { AppComponent }  from './app.component';
import { FeatureComponent } from './feature.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';

const ROUTES: Routes = [
  { path: '', component: ListComponent }, // 首页包含的组件，嵌套在根模块之下
  {
    path: 'detail/:id',
    component: DetailComponent,      // detail包含的组件，嵌套在根模块之下
    //children: [  路由嵌套
    //  { path: 'profile', component:  },
    //  { path: 'password', component:  }
    //]
  }
];

// 模块装饰器，里面是元数据metadata
@NgModule({
  declarations: [ HighlightDirective, AppComponent, FeatureComponent, ListComponent, DetailComponent], // 声明组件、指令,只能在主模块里声明
  bootstrap:    [ AppComponent ],  // 设置根模块
  imports:      [                 // 其他模块
                   BrowserModule,
                   FormsModule,      // 提供表单相关内置指令
                   RouterModule.forRoot(ROUTES) // 路由模块
                 ]
})
export class AppModule { }
