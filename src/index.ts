import db from "./db";

// See `init.sql` to see what the JSON data looks like.
const sql = `
    SELECT
        data ->> 'name' AS name,
        data -> 'equipment' AS equipment
    FROM messages;
`;
const params: string[] = [];

db.query(sql, params, (err, res) => {
    if (err) {
        console.error("ERROR", err);
    } else {
        console.log("rows", res.rows);
    }
});
