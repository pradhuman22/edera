"use client";
import React from "react";
import { Button } from "../ui/button";
import { BellIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const HeaderNotificationBell = () => {
  const session = authClient.useSession();
  return (
    <Button
      variant={"ghost"}
      className={cn("cursor-pointer rounded-full", {
        hidden: !session?.data?.session,
      })}
      size={"icon-lg"}
    >
      <BellIcon className="size-5" />
    </Button>
  );
};

export default HeaderNotificationBell;
