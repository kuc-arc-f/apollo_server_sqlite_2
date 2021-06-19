//const {  gql } = require('apollo-server-express');

export const GQL_QUERY = `
  type Query {
    hello: String
    todos: [Todo]
    todo(id: Int): Todo
    books: [Book]
    book(id: Int): Book
    articles: [Article]
    authors: [Author]
    users: [User]    
  }
`;
