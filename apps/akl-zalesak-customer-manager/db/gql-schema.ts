import { buildSchema } from "drizzle-graphql";

import { db } from "./drizzle";

export const { schema, entities } = buildSchema(db);
