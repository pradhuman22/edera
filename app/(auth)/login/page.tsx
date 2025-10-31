import LoginForm from "@/components/auth/login-form";
import SocialLoginButton from "@/components/auth/social-login-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Welcome back!</CardTitle>
        <CardDescription className="text-muted-foreground font-light">
          Enter your login credential to continue your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="grid gap-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card text-muted-foreground px-2">
              Or continue with
            </span>
          </div>
        </div>
        {/* social login buttons */}
        <SocialLoginButton />
      </CardFooter>
      <CardFooter>
        <div className="text-muted-foreground w-full text-center text-sm">
          Don&apos;t have an account yet?{" "}
          <Link href={"/register"} className="text-primary hover:underline">
            Register
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
