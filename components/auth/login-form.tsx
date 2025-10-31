"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema } from "@/schema";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type FormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter();
  const [display, setDisplay] = React.useState(false);
  const [isPending, setPending] = React.useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async ({ email, password }: FormValues) => {
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: () => {
          setPending(true);
        },
        onSuccess: () => {
          router.push("/dashboard/profile");
          router.refresh();
        },
        onError: async (ctx) => {
          if (ctx.error.status === 403) {
            await authClient.sendVerificationEmail({
              email,
              callbackURL: "/dashboard/profile",
            });
            toast.error(
              "Verification email has been send. Please verify your email.",
              {
                style: { color: "red" },
              },
            );
          } else {
            toast.error(`${ctx.error.message ?? "Something went wrong"}`, {
              style: { color: "red" },
            });
          }
        },
      },
    );

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
          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel htmlFor={field.name} className="text-inherit">
                    Password
                  </FormLabel>
                  <Link
                    href={"/forgot-password"}
                    className="text-muted-foreground text-xs hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <FormControl>
                  <InputGroup aria-disabled={isPending}>
                    <InputGroupInput
                      type={display ? "text" : "password"}
                      {...field}
                      placeholder="*******"
                    />
                    <InputGroupAddon align={"inline-end"}>
                      <Tooltip>
                        <TooltipTrigger asChild className="cursor-pointer">
                          <InputGroupButton
                            onClick={() => setDisplay(!display)}
                            size={"icon-xs"}
                            variant={"ghost"}
                          >
                            {display ? <EyeOffIcon /> : <EyeIcon />}
                          </InputGroupButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          {display ? "Hide Password" : "Show Password"}
                        </TooltipContent>
                      </Tooltip>
                    </InputGroupAddon>
                  </InputGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isPending} className="cursor-pointer">
          {isPending && <Loader2Icon className="animate-spin" />}
          {isPending ? "Logging user..." : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
