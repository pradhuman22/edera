"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { EyeIcon, EyeOffIcon, LoaderIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPasswordSchema } from "@/schema";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type FormValues = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || undefined;
  const [isPending, setPending] = React.useState(false);
  const [display, setDisplay] = React.useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async ({ password }: FormValues) => {
    setPending(true);
    const { error } = await authClient.resetPassword({
      newPassword: password,
      token: token,
    });
    if (error) {
      toast.error(error.message, {
        style: { color: "red" },
      });
    } else {
      toast.success("Password reset successful. Login to continue.", {
        style: {
          color: "green",
        },
      });
      router.push("/login");
    }
    setPending(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
        <div className="space-y-4">
          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={field.name} className="text-inherit">
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
          {/* confirm password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={field.name} className="text-inherit">
                  Confirm Password
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
        <Button disabled={isPending} className="cursor-pointer">
          {isPending && <LoaderIcon className="animate-spin" />}
          {isPending ? "Password Resetting" : "Reset Password"}
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
