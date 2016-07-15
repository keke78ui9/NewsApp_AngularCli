import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-news-tags',
    templateUrl: 'news-tags.component.html'
})
export class NewsTagsComponent implements OnInit {
    
    @Input() selectedNews;
    constructor() { }

    ngOnInit() { 

    }

}