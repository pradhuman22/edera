import React from "react";
import RegisterForm from "@/components/auth/register-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Create an account</CardTitle>
        <CardDescription className="text-muted-foreground font-light">
          Enter below information to create your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter>
        <div className="text-muted-foreground w-full text-center text-sm">
          Already have an account?
          <Link href={"/login"} className="text-primary mx-2 hover:underline">
            Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterPage;
