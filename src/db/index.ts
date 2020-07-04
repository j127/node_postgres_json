import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    // postgres is running in a docker container, but the JS is running from
    // the host, so use "localhost" instead of "postgres".
    host: "localhost",
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
});

function query(
    text: string,
    params: any[],
    // I don't know the correct callback type here, but this works for now.
    callback: (err: Error, res: any) => any
) {
    return pool.query(text, params, callback);
}

const db = { query };
export default db;
