import { User } from './user.interface';
import { Post } from './post.interface';

export interface DB {
  users: User[];
  posts: Post[];
}
