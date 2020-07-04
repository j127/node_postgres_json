import dotenv from "dotenv";
import connect, { sql } from "@databases/pg";

dotenv.config();

const db = connect({
    database: "public", // process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
});

export async function get(id: string) {
    const [row] = await db.query(
        sql`
            SELECT data
            FROM my_data
            WHERE id=${id}
        `
    );
    return row ? row.data : null;
}

export async function getAll() {
    const [row] = await db.query(
        sql`
            SELECT data
            FROM my_data
        `
    );
    return row ? row.data : null;
}

export async function set(id: string, value: object) {
    await db.query(sql`
        INSERT INTO messages (id, data)
        VALUES (${id}, ${value})
        ON CONFLICT id
        DO UPDATE SET data = EXCLUDED.data;
   `);
}
