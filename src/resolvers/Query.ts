import { User } from '../models/user.interface';
import { Post } from '../models/post.interface';
import { Context } from '../models/graphql.interfaces';

export const Query = {
  me: (): User => ({
    id: '5',
    name: 'Tech talk',
    age: 4,
    email: 'tech-talk@it.pl',
    description: 'Tech Talk #4 - Młodzi w IT'
  }),
  users: (_: {}, { query }: { query: string }, { db }: Context): User[] => {
    if (!query) {
      return db.users;
    }

    return db.users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
  },
  posts: (_: {}, { query }: { query: string }, { db }: Context): Post[] => {
    if (!query) {
      return db.posts;
    }

    return db.posts.filter(post => {
      const isTitleMatch: boolean = post.title.toLowerCase().includes(query.toLowerCase());
      const isBodyMatch: boolean = post.body.toLowerCase().includes(query.toLowerCase());

      return isTitleMatch || isBodyMatch;
    });
  }
};
