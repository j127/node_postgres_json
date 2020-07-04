import messages from "./messages";
import { v4 as uuidv4 } from "uuid";

const ms = messages.createMessages(20);

ms.map(async msg => await messages.set(uuidv4(), msg));

// async function getSomeData() {
//     const items = await messages.getAll();
//     console.log("items", items);
// }

// getSomeData();

// messages.getAll().then(data => console.log(data));
