export interface TopHeadlinesData {
  source: TopHeadlinesSource;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
  isTruncated?: boolean;
}

interface TopHeadlinesSource {
  id?: string;
  name: string;
}
