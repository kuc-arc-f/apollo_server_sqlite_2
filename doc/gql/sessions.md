
query {
  sessions {
    id
    jsondata
  }
}

***
mutation add {
  addSession(
    user_id: 1
    jsondata: "[]"
    ) {
    id
  }
}
***

