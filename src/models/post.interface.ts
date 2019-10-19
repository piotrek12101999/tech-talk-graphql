export interface Post {
  id: string;
  title: string;
  subtitle?: string;
  body: string;
  isPublished: boolean;
  author: string;
}
