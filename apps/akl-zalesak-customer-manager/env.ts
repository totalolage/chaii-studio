import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { config } from "dotenv";

config({ path: ".env.local" });

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    CLERK_SECRET_KEY: z.string(),
    VERCEL_URL: z.string().optional(),
    __NEXT_PRIVATE_ORIGIN: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env["NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"],
  },
});
