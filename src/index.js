const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import LibTodos from '../lib/LibTodos'
import LibBooks from '../lib/LibBooks'
import LibArticles from '../lib/LibArticles'
import LibAuthors from '../lib/LibAuthors'
import {typeDefs} from './scheme'

//
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    todos:async () => {
      return await LibTodos.get_items()
    }, 
    async todo(parent, args, context, info){
      return await LibTodos.get_todo(args.id);
    },
    books : async () => {
      return await LibBooks.get_items()
    }, 
    book: async function (parent, args, context, info){
      return await LibBooks.get_book(args.id);
    },
    articles : async () => {
      return await LibArticles.get_items()
    }, 
    authors : async () => {
      return await LibAuthors.get_items()
    }, 
  },
  Mutation: {
    addTodo: async (parent, args, context) => {
      var ret = await LibTodos.add_todo(args)
      ret.id = 0
      return ret
    },
    updateTodo: async (parent, args, context) => {
      var ret = await LibTodos.update_todo(args)
      return ret
    },
    deleteTodo: async (parent, args, context) => {
      var ret = args
      ret.title = ""
      var ret = await LibTodos.delete_todo(args)
      return ret
    },  
    addBook: async (parent, args, context) => {
      var ret = await LibBooks.add_book(args)
      ret.id = 0
      return ret
    },
    updateBook: async (parent, args, context) => {
      var ret = await LibBooks.update_book(args)
      return ret
    },
    deleteBook: async (parent, args, context) => {
//      var ret = args
      var ret = await LibBooks.delete_book(args)
      return ret
    },  
    addAticle: async (parent, args, context) => {
      var ret = await LibArticles.add_item(args)
      ret.id = 0
      return ret
    },    
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });
// ENV
console.log(app.get('env'));
var config = require('../config.json')[app.get('env')];
// console.log(config.MYSQL_DBNAME);

app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
