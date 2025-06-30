-- SQL schema
CREATE TABLE Users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  role TEXT,
  status TEXT
);
CREATE TABLE Devices (
  id INTEGER PRIMARY KEY,
  name TEXT,
  type TEXT,
  room_id INTEGER
);
-- More tables follow...
