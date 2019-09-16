import { Component, OnInit } from '@angular/core';
import { NewsService, Config } from '../news.service';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.scss']
})
export class PageNewsComponent implements OnInit {

  private config: Config;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  showConfig() {
    this.newsService.getNews('')
      .subscribe((data: Config) => this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });


      this.newsService.getNews('')
      .subscribe((data: Config) => this.config = { ...data });

  }

}
