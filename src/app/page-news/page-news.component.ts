import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.scss']
})
export class PageNewsComponent implements OnInit {

  articles: Array<object> = [];

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let newsQuery: string = this.route.snapshot.queryParamMap.get('search') || '';
    this.newsService.getNews(newsQuery)
      .subscribe((data) => this.articles = data.articles);
  }
}
