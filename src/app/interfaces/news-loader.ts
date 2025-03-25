export interface NewsLoader {
  articles: Article[];
}

export interface Article {
  author: '';
  content: '';
  description: '';
  publishedAt: '';
  title: '';
  source: Source;
  url: '';
  urlToImage: '';
}
export interface Source {
  name: '';
}
