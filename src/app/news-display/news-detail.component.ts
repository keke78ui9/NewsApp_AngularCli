import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NewsDataService} from '../dataServices/news-data-service.service';

import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {NewsModel} from '../dataServices/newsModel';

@Component({
  moduleId: module.id,
  selector: 'app-news-detail',
  templateUrl: 'news-detail.component.html',
  styleUrls: ['news-detail.component.css'],
  providers: [NewsDataService]
})
export class NewsDetailComponent implements OnInit {
  newsModel: NewsModel = new NewsModel();
  constructor(private route: ActivatedRoute,
  private newsDataSvc: NewsDataService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.info("detail start");
      let id = params['id'];
      let news$ = this.newsDataSvc.getOneData(id);
      news$.subscribe(res => {
          this.newsModel = res;
          console.info("subscribe to see data " + res.Id);
      })
      // test.subscribe((data) => {
      //     console.info(data);
      // })
           // news$.subscribe(x=>{
      //   console.info(x);
      //   let news = x.find(_ => _.id === id);

      //   console.info(news);
      // });
    });
  }

  goBack() {
     window.history.back();
  }

}
