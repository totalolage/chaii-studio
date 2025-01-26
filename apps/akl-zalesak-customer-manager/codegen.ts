import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'

const config: CodegenConfig = {
  schema: "gql/__generated__/schema.graphql",
  documents: "app/**/!(*.generated){.ts,.tsx,.gql,graphql}",
  generates: {
    "gql/__generated__/possibleTypes.json": {
      plugins: ["fragment-matcher"],
      config: {
        useExplicitTypings: true,
      },
    },
    ".": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "gql/__generated__/graphql.ts",
        folder: "__generated__/",
        //extension: ".gql.ts",
      },
      plugins: [
        {
          add: {
            placement: "prepend",
            content: ["// @ts-nocheck", "/* eslint-disable */"].join("\n"),
          },
        },
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        immutableTypes: true,
        dedupeFragments: true,
        extractAllFieldsToTypes: true,
        enumsAsTypes: true,
        inlineFragmentTypes: "mask",
        customDirectives: {
          apolloUnmask: true
        }
      },
      documentTransforms: [addTypenameSelectionDocumentTransform]
    },
  },
};

export default config;
