import { Component, OnInit } from '@angular/core';
import { LoadNewsService } from '../../services/load-news.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Article } from '../../interfaces/news-loader';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-news-main-page',
  imports: [CommonModule, NgFor, NgIf, FormsModule],
  templateUrl: './news-main-page.component.html',
  styleUrl: './news-main-page.component.css',
  standalone: true,
})
export class NewsMainPageComponent implements OnInit {
  categories = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
  ];
  articles!: Article[];
  selectedCategory = '';
  searchQuery = '';
  constructor(private newsLoader: LoadNewsService, private router: Router) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews() {
    if (this.searchQuery) {
      this.newsLoader.loadNews(this.searchQuery).subscribe((data) => {
        this.articles = data.articles; 
      });
    } else {
      this.newsLoader
        .loadTopHeadLines(this.selectedCategory)
        .subscribe((data) => {
          this.articles = data.articles;
        });
    }
  }
  changingCategory(category: string) {
    this.selectedCategory = category;
    this.searchQuery = '';
    this.loadNews();
  }

  onSearch(value: string) {
    this.selectedCategory = '';
    this.searchQuery = value;
    this.loadNews();
    this.searchQuery = '';
  }

  viewDetails(article: Article) {
    this.router.navigate(['/news', article.title], { state: { article } });
  }
}
