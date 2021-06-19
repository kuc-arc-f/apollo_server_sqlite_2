
drop table books;
---
create table books(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  content TEXT,
  category_id INTEGER,
  radio_1 INTEGER,
  check_1 TEXT,
  date_1 TEXT,
  created_at TIMESTAMP
);
--INSERT INTO books (title) VALUES('todo_1');

