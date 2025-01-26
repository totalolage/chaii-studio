import { buildSchema } from "drizzle-graphql";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { db } from "db/drizzle";

const { schema } = buildSchema(db);

const server = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV === "development",
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export const GET = handler;
export const POST = handler;
export const OPTIONS = handler;
