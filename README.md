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

More info [here](https://itnext.io/storing-json-in-postgres-using-node-js-c8ff50337013).
