# `node_postgres_json`

An experiment with storing JSON in PostgreSQL.

For local development:

```text
$ docker run --rm \
    -p 5432:5432 \
    -v $HOME/docker/volumes/postgres:/var/run/postgresql \
    -e POSTGRES_USER=username \
    -e POSTGRES_PASSWORD=password \
    --name postgres-tmp postgres
```
