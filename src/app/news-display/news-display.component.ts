import { Component, OnInit } from '@angular/core';

import {NewsDataService} from '../news-data-service.service';
import {NewsDetailComponent} from './news-summary.component';
import {NewsTagsComponent} from './news-tags.component';

@Component({
  moduleId: module.id,
  selector: 'app-news-display',
  templateUrl: 'news-display.component.html',
  styleUrls: ['news-display.component.css'],
  providers: [NewsDataService],
  directives: [NewsDetailComponent, NewsTagsComponent]
  
})
export class NewsDisplayComponent implements OnInit {
  techNewsList: any[];
  selectedNews: {};

  constructor(private newsDataSvc: NewsDataService) {}

  ngOnInit() {
    this.techNewsList = this.newsDataSvc.getData();
  }

  selectEvent(news: any) {
    console.info(news);
    this.selectedNews = news;
  }
}
