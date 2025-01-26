import fs from "fs";

import { printSchema } from "graphql";

import { schema } from "../gql/schema";

fs.writeFileSync("gql/__generated__/schema.graphql", printSchema(schema), {
  encoding: "utf-8",
});
