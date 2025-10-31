import React, { Suspense } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ResetPasswordForm from "@/components/auth/reset-password-form";

const ResetPasswordPage = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Reset Password</CardTitle>
        <CardDescription className="text-muted-foreground font-light">
          Enter new password to reset your account password.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense>
          <ResetPasswordForm />
        </Suspense>
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

export default ResetPasswordPage;
