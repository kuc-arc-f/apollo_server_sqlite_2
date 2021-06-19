
query {
  todos {
    id
    title
  }
}
***
query {
  articles {
    id
    title
    author {
      id
      name
    }    
  }
}
query {
  authors {
    id
    name
  }
}
***
mutation add {
  addAticle(
    title: "title4", author_id: 2 ) {
    id
    title
  }
}
***

