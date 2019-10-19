import { Context, CreateUserData, UpdateUserData, DeleteUserData } from '../models/graphql.interfaces';
import { generateID } from '../lib/generateID';
import { User } from '../models/user.interface';

export const Mutation = {
  createUser: (_: {}, { data }: CreateUserData, { db }: Context): User => {
    const id: string = generateID();

    const user: User = {
      id,
      ...data
    };

    db.users.push(user);

    return user;
  },
  updateUser: (_: {}, { id, data }: UpdateUserData, { db }: Context): User => {
    const user: User = db.users.find(user => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    if (typeof data.email === 'string') {
      user.email = data.email;
    }

    if (typeof data.name === 'string') {
      user.name = data.name;
    }

    if (typeof data.age !== 'undefined') {
      user.age = data.age;
    }

    return user;
  },
  deleteUser: (_: {}, { id }: DeleteUserData, { db }: Context): User => {
    const userIndex: number = db.users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const [deletedUser]: User[] = db.users.splice(userIndex, 1);

    db.posts = db.posts.filter(post => {
      const match: boolean = post.author === id;

      return !match;
    });

    return deletedUser;
  }
};
