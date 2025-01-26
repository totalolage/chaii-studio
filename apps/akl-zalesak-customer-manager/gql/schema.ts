import { buildSchema } from "drizzle-graphql";

import { db } from "../db/drizzle";

export const { schema, entities } = buildSchema(db);
