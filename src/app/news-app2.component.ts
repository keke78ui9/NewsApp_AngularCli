import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'news-app2-app',
  templateUrl: 'news-app2.component.html',
  styleUrls: ['news-app2.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class NewsApp2AppComponent {
  title = 'TECH News App';
  constructor() {} 
}
