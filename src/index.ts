import dotenv from "dotenv";
// import connect, { sql } from "@databases/pg";
import { createMessage } from "./generate-messages";

dotenv.config();

const msg = createMessage();

console.log(msg);


// const db = connect();

// export async function get(id: string) {
//     const [row] = await db.query(
//         sql`
//             SELECT data
//             FROM my_data
//             WHERE id=${id}
//         `
//     );
//     return row ? row.data : null;
// }

// export async function set(id: string, value: object) {
//     await db.query(sql`
//         INSERT INTO messages (id, data)
//         VALUES (${id}, ${value})
//         ON CONFLICT id
//         DO UPDATE SET data = EXCLUDED.data;
//    `);
// }
