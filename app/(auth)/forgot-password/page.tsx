import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import ForgotPasswordForm from "@/components/auth/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot Password | HOMIES",
};

const ForgotPasswordPage = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Forgot Password</CardTitle>
        <CardDescription className="text-muted-foreground font-light">
          Enter your email to receive reset password email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
      <CardFooter>
        <div className="text-muted-foreground w-full text-center text-sm">
          Remember Password?
          <Link href={"/login"} className="text-primary mx-2 hover:underline">
            Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ForgotPasswordPage;
