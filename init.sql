-- Dump JSON into this table.
CREATE TABLE messages (
    id serial NOT NULL PRIMARY KEY,
    data JSONB NOT NULL
);

-- initial data
INSERT INTO messages(data) VALUES('{"name":"Alice","age":"123","species":"cat","equipment":[1,2,3]}');
INSERT INTO messages(data) VALUES('{"name":"Bob","age":"321","species":"bird","equipment":[0,5,9]}');
INSERT INTO messages(data) VALUES('{"name":"Ecila","age":"234","species":"cat","equipment":[7,6,4]}');
