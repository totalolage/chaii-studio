import type { CodegenConfig } from "@graphql-codegen/cli";
import { printSchema } from "graphql";

import { schema } from "./db/gql-schema";

const config: CodegenConfig = {
  overwrite: true,
  schema: printSchema(schema),
  documents: "app/**/*{.ts,.tsx}",
  generates: {
    "apollo/__generated__/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
