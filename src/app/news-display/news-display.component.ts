import { Component, OnInit } from '@angular/core';

import {NewsDataService} from '../dataServices/news-data-service.service';
import {NewsDetailComponent} from './news-summary.component';
import {NewsTagsComponent} from './news-tags.component';

import {ROUTER_DIRECTIVES} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-news-display',
  templateUrl: 'news-display.component.html',
  styleUrls: ['news-display.component.css'],
  providers: [NewsDataService],
  directives: [NewsDetailComponent, NewsTagsComponent, ROUTER_DIRECTIVES]
  
})
export class NewsDisplayComponent implements OnInit {
  techNewsList$: Observable<any[]>;
  selectedNews: {};

  constructor(private newsDataSvc: NewsDataService) {}

  ngOnInit() {
    this.techNewsList$ = this.newsDataSvc.getData();
  }

  selectEvent(news: any) {
    this.selectedNews = news;
  }
}
