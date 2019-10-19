import { User } from './models/user.interface';
import { Post } from './models/post.interface';

const users: User[] = [
  {
    id: '1',
    name: 'Piotr',
    age: 20,
    email: 'p.swiatek@cctechnology.pl',
    description: 'Talk is cheap. Show me the code.'
  },
  {
    id: '2',
    name: 'Dominika',
    age: 19,
    email: 'domi@kochana.pl'
  },
  {
    id: '3',
    name: 'Zbyszek',
    age: 28,
    email: 'z.hadzlik@cctechnology.pl',
    description: 'Lubie ludzi oraz moich najlepszych kumpli Alka i Piotrka'
  }
];

const posts: Post[] = [
  {
    id: '10',
    title: 'Introduction to GraphQL',
    subtitle: 'Lets dive into this wonderful world ;p',
    body: 'lorem ipsum dolom sitem',
    isPublished: true,
    author: '1'
  },
  {
    id: '11',
    title: 'What can I write here',
    body:
      'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    isPublished: false,
    author: '2'
  },
  {
    id: '12',
    title: 'Another post',
    subtitle: 'test test',
    body:
      'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    isPublished: true,
    author: '3'
  },
  {
    id: '14',
    title: 'title',
    subtitle: 'subtitle',
    body: 'sitem dolo ipsum lorem',
    isPublished: false,
    author: '1'
  }
];

export const db = {
  users,
  posts
};
