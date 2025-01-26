import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

import { getClient as getSSRClient } from "./get-ssr-client";

export const {
  getClient,
  query,
  PreloadQuery,
} = registerApolloClient(getSSRClient);
