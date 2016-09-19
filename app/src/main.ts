import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import 'admin-lte/dist/css/AdminLTE.min.css!';
import 'admin-lte/dist/css/skins/skin-blue.min.css!';
import 'admin-lte/dist/js/app.min.js';
import 'bootstrap';
import 'bootstrap/css/bootstrap.min.css!';
import 'jquery/dist/jquery';
import 'font-awesome/css/font-awesome.css!';
import 'ionicons/dist/css/ionicons.min.css!';



const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
