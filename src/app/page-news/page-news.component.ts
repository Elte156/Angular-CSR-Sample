import { Component, OnInit } from '@angular/core';
import { NewsService, Config } from '../news.service';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.scss']
})
export class PageNewsComponent implements OnInit {

  private config: Config;


  array = [
    {
      guid: '900ea552-ef68-42cc-b6a6-b8c4dff10fb7',
      publishedAt: 32,
      title: 'Powers Schneider',
    },
    {
      guid: '880381d3-8dca-4aed-b207-b3b4e575a15f',
      publishedAt: 25,
      title: 'Adrian Lawrence',
    },
    {
      guid: '87b47684-c465-4c51-8c88-3f1a1aa2671b',
      publishedAt: 32,
      title: 'Boyer Stanley',
    },
  ]


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
