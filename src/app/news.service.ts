import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(newsQuery: string): any {
    const params = {
      q: newsQuery,
      country: 'us',
      apiKey: 'fb1bd64055aa49ac8fbd38a466e2b9b7'
    };
    const url = 'https://newsapi.org/v2/top-headlines';

    return this.http.get<Config>(url, { params: params });
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}




// //
// fetch(req)
//     .then(res => res.json())
//     .then(res => {
//       for (let index = 0; index < res.articles.length; index++) {
//         const element = res.articles[index];
//         const title = element.title;
//         const publishedAt = element.publishedAt;
