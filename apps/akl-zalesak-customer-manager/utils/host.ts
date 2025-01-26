import { env } from "env";

export const host =
  typeof window === "undefined"
    ? env.__NEXT_PRIVATE_ORIGIN || `https://${env.VERCEL_URL}`
    : window.location.origin;

console.log("Host", host);
