# `node_postgres_json`

An experiment with storing JSON in PostgreSQL.

For local development start postgres in Docker:

```text
$ docker-compose up
```

Then, outside of Docker, on the host machine, run the code:

```
$ npm install
$ npm run build
$ npm start
```

To shutdown postgres:

```text
$ docker-compose down
```

## Notes

The `.env` file will be used to set the username and database name.

Find the ID of the running container:

```text
$ docker container ps
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS                    NAMES
5f533888402f        nodepostgresjson_postgres   "docker-entrypoint.s…"   23 seconds ago      Up 20 seconds       0.0.0.0:5432->5432/tcp   nodepostgresjson_postgres_1
```

You can then enter the container like this:

```text
$ docker container exec 5f533888402f psql -U postgres
```

From there you can run SQL commands. Here's an example.

```text
$ dc exec -it 5f533888402f psql -U postgres
psql (12.3)
Type "help" for help.

postgres=# \l
                                  List of databases
    Name     |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges
-------------+----------+----------+------------+------------+-----------------------
 messages_db | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
 postgres    | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
 template0   | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
             |          |          |            |            | postgres=CTc/postgres
 template1   | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
             |          |          |            |            | postgres=CTc/postgres
(4 rows)

postgres=# \c messages_db
You are now connected to database "messages_db" as user "postgres".

messages_db=# select * from messages;
 id |                                   data
----+---------------------------------------------------------------------------
  1 | {"age": "123", "name": "Alice", "species": "cat", "equipment": [1, 2, 3]}
  2 | {"age": "321", "name": "Bob", "species": "bird", "equipment": [0, 5, 9]}
  3 | {"age": "234", "name": "Ecila", "species": "cat", "equipment": [7, 6, 4]}
(3 rows)
```
