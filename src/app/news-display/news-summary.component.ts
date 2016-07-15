import { Component, OnInit, Input } from '@angular/core';
import {ShortenHtmlPipe} from '../shared/pipes/ShortenHtml.pipe';

@Component({
    moduleId: module.id,
    selector: 'app-news-summary',
    templateUrl: 'news-summary.component.html',
    pipes: [ShortenHtmlPipe]
})
export class NewsDetailComponent implements OnInit {
    
    @Input() selectedNews;
    constructor() { }

    ngOnInit() { 

    }

}