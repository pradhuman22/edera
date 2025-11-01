import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { createAuthMiddleware, APIError } from "better-auth/api";
import { resend } from "./resend";
import { EmailVerificationTemplate } from "@/templates/EmailVerificationTemplate";
import ResetPasswordTemplate from "@/templates/ResetPasswordTemplate";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24 * 7,
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  user: {
    additionalFields: {
      contact: {
        type: "string",
        required: false,
      },
      bio: {
        type: "string",
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: user.email,
        subject: "Reset Forgot Password",
        react: ResetPasswordTemplate({
          url,
          name: user?.name,
        }),
      });
    },
  },
  emailVerification: {
    sendOnSignIn: true,
    expiresIn: 60 * 60,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      const link = new URL(url);
      link.searchParams.set("callbackURL", "/email-verified");
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: user.email,
        subject: "Email Verification",
        react: EmailVerificationTemplate(String(link), user.name),
      });
    },
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (ctx.path == "/forget-password") {
        const email = ctx.body.email;
        const checkEmail = await prisma.user.findFirst({
          where: {
            email,
          },
        });
        if (!checkEmail) {
          throw new APIError("BAD_REQUEST", {
            message: "Reset Password: User not found",
          });
        }
        return ctx;
      }
    }),
  },
  account: {
    accountLinking: {
      enabled: false,
    },
  },
  trustedOrigins: ["192.168.11.8", "http://localhost:3001"],
} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session;
