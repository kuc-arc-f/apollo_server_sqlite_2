
export const GQL_MUTATION = `
  type Mutation {
    addTodo(title: String!): Todo
    updateTodo(id: Int!, title: String!): Todo
    deleteTodo(id: Int!): Todo
    addBook(
      user_id: Int ,title: String!, content: String, category_id: Int, 
      radio_1: Int , check_1: String , date_1: String
    ): Book
    updateBook(
      id: Int!, title: String!, content: String, category_id: Int,
      radio_1: Int , check_1: String , date_1: String
    ): Book
    deleteBook(id: Int!): Book
    addAticle(title: String! ,author_id: Int!) : Article
    addSession(user_id: Int!, jsondata: String): Session
  }
`;
