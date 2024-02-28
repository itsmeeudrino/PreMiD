/* c8 ignore start */
import { createServer } from "./functions/createServer.js";
import redis from "./redis.js";

if (!process.env.REDIS_URL) console.log("WARNING: No REDIS_URL environment variable set");

export const server = await createServer(redis);

const url = await server.listen({
	host: process.env.HOST ?? "0.0.0.0",
	port: Number.parseInt(process.env.PORT ?? "80"),
});

console.log(`Server listening at ${url}`);
// TODO Make proper error codes & json responses
