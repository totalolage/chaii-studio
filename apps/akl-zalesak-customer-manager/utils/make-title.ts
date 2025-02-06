import { APP_NAME } from "~/constants";

export const makeTitle = (pageName?: string) =>
  [pageName, APP_NAME].join(" | ");
