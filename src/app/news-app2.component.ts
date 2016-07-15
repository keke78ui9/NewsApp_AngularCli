import { Component } from '@angular/core';
import { HeroComponent } from './+hero';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouterOutletMap} from '@angular/router';
import {NewsDisplayComponent} from './news-display/'
@Component({
  moduleId: module.id,
  selector: 'news-app2-app',
  templateUrl: 'news-app2.component.html',
  styleUrls: ['news-app2.component.css'],
  directives:[ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: 'news', component: NewsDisplayComponent},
  {path: 'news2', component: HeroComponent}
])
export class NewsApp2AppComponent {
  title = 'news-app2 works!';
  constructor(private router: Router) {} 
}
