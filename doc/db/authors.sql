
---
create table authors(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  created_at TIMESTAMP
);

INSERT INTO authors (name) VALUES('Hoge taro');
INSERT INTO authors (name) VALUES('Fuga taro');
