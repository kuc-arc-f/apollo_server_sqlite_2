
query {
  todos {
    id
    title
  }
}
***
query {
  books {
    id
    title
    content
    category_id
    radio_1
    check_1
    date_1
  }
}
***
query {
  book(id: 1){
    id
    title
    content
    category_id
  }
}
***
mutation add {
  addBook(
    title: "book6", content: "cont", category_id: 1 ,
    radio_1: 1, check_1: "", date_1:""
    ) {
    id
    title
    content
    category_id
    radio_1
    check_1
  }
}
***
mutation update {
  updateBook(id: 4, title: "b4aa", content: "cont", category_id: 1) {
    id
    title
  }
}
***
mutation delete {
  deleteBook (id: 5) {
    id
  }
}
***
