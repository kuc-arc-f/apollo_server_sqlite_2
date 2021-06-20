
query {
  todos {
    id
    title
  }
}
***
query {
  articles(page: 1) {
    id
    title
    author {
      id
      name
    }    
  }
}
***
query {
  article(id: 1){
    id
    title
    author {
      id
      name
    }     
  }
}
***
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

