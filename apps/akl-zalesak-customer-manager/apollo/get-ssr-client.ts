import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { HttpLink } from "@apollo/client";

import { host } from "utils/host";
import * as Schema from "gql/types";

export const getClient = () =>
  new ApolloClient<typeof Schema>({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: new URL("/api/graphql", host).toString(),
      // fetchOptions: { cache: "no-store" },
    }),
    dataMasking: true,
  });
