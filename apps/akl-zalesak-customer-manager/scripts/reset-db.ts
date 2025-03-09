/* eslint-disable import/no-unused-modules */
import path from "path";

import { $ } from "bun";
import { reset } from "drizzle-seed";

import { db } from "~/db/drizzle";
// eslint-disable-next-line import/no-namespace
import * as schema from "~/db/schema";

console.log("🧹 Resetting database...");
await reset(db, schema);

// CD to the root of the project
$.cwd(path.join(__dirname, ".."));

console.log(
  await $`
    rm -rf migrations;
    bunx drizzle-kit generate;
    bunx drizzle-kit migrate;
    bun db/seed.ts;
  `.text(),
);
