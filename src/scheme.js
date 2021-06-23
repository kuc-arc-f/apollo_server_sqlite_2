const {  gql } = require('apollo-server-express');
import {GQL_QUERY} from './query'
import {GQL_MUTATION} from './mutation'

export const typeDefs = gql`
  type Todo {
    id: Int!
    title: String
  }
  type Author {
    id: Int!
    name: String
  }  
  type Article {
    id: Int!
    title: String
    author: Author
  }  
  type Book {
    id: Int!
    user_id: Int
    title: String
    content: String
    category_id: Int!
    radio_1: Int
    check_1: String
    date_1: String
  }  
  type User {
    id: Int!
    name: String
    email: String
    password: String
  } 
  type Session{
    id: Int!
    user_id: Int
    jsondata: String
  }
  ${GQL_QUERY}
  ${GQL_MUTATION}
`;
