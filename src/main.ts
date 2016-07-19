import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NewsApp2AppComponent, environment } from './app/';
import {provideRouter, RouterConfig} from '@angular/router';

import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import {NewsDisplayComponent, NewsDetailComponent} from './app/news-display/';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

const routes: RouterConfig = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  // { path: 'home', component: HeroComponent },
  { path: 'news', component: NewsDisplayComponent },
  { path: 'detail/:id', component: NewsDetailComponent },
];

bootstrap(NewsApp2AppComponent, [
  provideRouter(routes),
  HTTP_PROVIDERS,
  { 
    provide: LocationStrategy,
    useClass: PathLocationStrategy 
  }
])
.catch(error => {
  console.error(error);
});
