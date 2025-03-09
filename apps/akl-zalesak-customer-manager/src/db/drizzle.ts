import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

import * as schema from "./schema";

import { env } from "env";

neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true;

const sql = neon(env.DATABASE_URL);

export const db = drizzle({ client: sql, schema });
