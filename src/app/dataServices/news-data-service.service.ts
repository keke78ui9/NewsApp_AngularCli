import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {NewsModel} from './newsModel';

@Injectable()
export class NewsDataService {

  constructor(private http: Http) {}


  getData(): Observable<NewsModel[]> {
    return this.http.get('./app/dataServices/news.json')
    .do((d: Response) => console.log("raw data " + d))
    .map((res: Response) => res.json())
    .do((d: NewsModel) => console.log('processed data', d));
  }

  getOneData(id: NewsModel) : Observable<any> {
    return this.http.get('./app/dataServices/news.json')
      .map(res => res.json())
      .map((list: Array<any>) =>{
        let result: NewsModel = new NewsModel();
        if (list) {
          list.forEach(element => {
            //            console.info(element);
            if (element.Id === id) {
              console.info("find the one " + element.Id);
              result = element;
            }
          });
          return result;
        }
      })
  }
}
