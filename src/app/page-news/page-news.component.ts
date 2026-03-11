import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [NewsService]
})
export class PageNewsComponent implements OnInit {

  articles: Array<object> = [];

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadNews();

    this.route.queryParamMap.subscribe(queryParams => {
      let newsQuery: string = queryParams.get('search') || '';
      this.loadNews(newsQuery);
    });
  }

  loadNews(newsQuery: string = "") {
    this.newsService.getNews(newsQuery)
    .subscribe((data) => this.articles = data.articles);
  }
}
