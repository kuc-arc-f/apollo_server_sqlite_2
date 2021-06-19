
---
create table todos(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  created_at TIMESTAMP
);

INSERT INTO todos (title) VALUES('todo_1');
INSERT INTO todos (title) VALUES('todo_2');
