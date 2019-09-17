import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(newsQuery: string): Observable<any> {
    const params = {
      q: newsQuery,
      country: 'us',
      apiKey: 'fb1bd64055aa49ac8fbd38a466e2b9b7'
    };
    const url = 'https://newsapi.org/v2/top-headlines';

    return this.http.get(url, { params: params });
  }
}
