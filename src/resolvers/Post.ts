import { DB } from '../models/db.interface';
import { Post as IPost } from '../models/post.interface';

export const Post = {
  author: (parent: IPost, _: {}, { db }: { db: DB }) => db.users.find(user => user.id === parent.author)
};
