"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { forgotPasswordSchema } from "@/schema";

type FormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [isPending, setPending] = React.useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async ({ email }: FormValues) => {
    await authClient.forgetPassword({
      email,
      redirectTo: "/reset-password",
      fetchOptions: {
        onRequest: () => {
          setPending(true);
        },
        onSuccess: () => {
          toast.success("Reset link sent to your email.", {
            style: { color: "green" },
          });
          router.push("/login");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message, {
            style: { color: "red" },
          });
        },
      },
    });
    setPending(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
        <div className="space-y-4">
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={field.name} className="text-inherit">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    id={field.name}
                    placeholder="eg: hari@example.com"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isPending} className="cursor-pointer">
          {isPending && <LoaderIcon className="animate-spin" />}
          {isPending ? "Sending reset email" : "Send Reset Email"}
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
