import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsLoader } from '../interfaces/news-loader';
@Injectable({
  providedIn: 'root',
})
export class LoadNewsService {
  private apiKey = '44bb7da8bb9d41f18bde2f9fbfe2d86d';

  constructor(private http: HttpClient) {}

  loadNews(keyWord: string) {
    return this.http.get<NewsLoader>(
      `https://newsapi.org/v2/everything?q=${keyWord}&apiKey=${this.apiKey}`
    );
  }
  loadTopHeadLines(category: string = '') {
    return this.http.get<NewsLoader>(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=20&apiKey=${this.apiKey}`
    );
  }
}
