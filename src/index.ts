import { GraphQLServer } from 'graphql-yoga';
import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import { User } from './resolvers/User';
import { Post } from './resolvers/Post';
import { db } from './data';

const server: GraphQLServer = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    User,
    Post
  },
  context: {
    db
  }
});

server.start(() => console.log('Server is up and running'));
