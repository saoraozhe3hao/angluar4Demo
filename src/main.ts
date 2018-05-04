import 'core-js/client/shim.min.js'; // 旧浏览器兼容垫片
import 'zone.js/dist/zone';

require("./styles.css");
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


// 启动主模块
platformBrowserDynamic().bootstrapModule(AppModule);
