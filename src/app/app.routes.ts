import { Routes } from '@angular/router';
import { NewsMainPageComponent } from './components/news-main-page/news-main-page.component';
import { NewsDescriptionComponent } from './components/news-description/news-description.component';

export const routes: Routes = [
  { path: '', component: NewsMainPageComponent },
  { path: 'news/:id', component: NewsDescriptionComponent },
];
