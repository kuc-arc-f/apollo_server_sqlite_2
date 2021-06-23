
drop table sessions;
---
create table sessions(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  jsondata TEXT,
  created_at TIMESTAMP
);
--INSERT INTO books (title) VALUES('todo_1');

