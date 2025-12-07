/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//


// Register Swiper custom elements globally



platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));


