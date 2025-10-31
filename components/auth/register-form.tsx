"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const router = useRouter();
  const [isPending, setPending] = React.useState(false);
  const [display, setDisplay] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async ({ name, email, password }: FormData) => {
    await authClient.signUp.email(
      {
        name,
        email,
        password,
        contact: "",
        bio: "",
      },
      {
        onRequest: () => {
          setPending(true);
        },
        onSuccess: () => {
          toast.success(
            "Your account has been created. Check your email for a verification link.",
            {
              style: { color: "green" },
            },
          );
          router.push("/");
        },
        onError: (ctx) => {
          toast.error(`${ctx.error.message ?? "Something went wrong"}`, {
            style: { color: "red" },
          });
        },
      },
    );
    setPending(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-3.5">
          {/* name field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor={field.name}
                  className="text-base data-[error=true]:text-inherit"
                >
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="eg: Hari Bahadur Shrestha"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor={field.name}
                  className="text-base data-[error=true]:text-inherit"
                >
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="eg: hari@example.com"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor={field.name}
                  className="text-base data-[error=true]:text-inherit"
                >
                  Password
                </FormLabel>
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
        <Button size={"lg"} className="w-full cursor-pointer">
          Register
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
