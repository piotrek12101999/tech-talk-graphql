import { DB } from '../models/db.interface';
import { User as IUser } from '../models/user.interface';

export const User = {
  posts: (parent: IUser, _: {}, { db }: { db: DB }) => db.posts.filter(post => post.author === parent.id)
};
