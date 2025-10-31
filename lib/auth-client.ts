import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { adminClient } from "better-auth/client/plugins";
import type { auth } from "./auth";
export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [
    inferAdditionalFields<typeof auth>({
      user: {
        bio: {
          type: "string",
          required: false,
        },
        contact: {
          type: "string",
          required: "false",
        },
      },
    }),
    adminClient(),
  ],
});

export type Session = typeof authClient.$Infer.Session;
