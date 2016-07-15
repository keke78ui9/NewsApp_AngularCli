import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NewsApp2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NewsApp2AppComponent);
