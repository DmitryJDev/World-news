import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Article } from '../../interfaces/news-loader';
import { CommonModule, DatePipe, NgIf } from '@angular/common';
@Component({
  selector: 'app-news-description',
  imports: [CommonModule, NgIf, DatePipe, RouterLink],
  templateUrl: './news-description.component.html',
  styleUrl: './news-description.component.css',
  standalone: true,
})
export class NewsDescriptionComponent implements OnInit {
  article!: Article;
  constructor(private router: Router) {}
  ngOnInit() {
    this.article = history.state.article; 
    if (!this.article) {
      this.router.navigate(['/']);
      return;
    }
  }
}
