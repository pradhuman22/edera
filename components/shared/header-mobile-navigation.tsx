"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { LogOutIcon, Menu } from "lucide-react";
import HeaderAuthButtons from "./header-auth-buttons";
import HeaderMobileUserNavigation from "./header-mobile-user-navigation";
import Link from "next/link";
import { mainMenus, userMenus } from "@/constant";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const HeaderMobileNavigation = () => {
  const router = useRouter();
  const { data } = authClient.useSession();
  const session = data?.session;
  const user = data?.user;
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("You’ve logged out. See you soon!", {
            style: {
              color: "green",
            },
          });
          router.push("/login");
          router.refresh();
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      },
    });
  };
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer lg:hidden">
        <Button type="button" variant={"outline"} size={"icon-lg"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-2/3 pt-2">
        <SheetHeader>
          <SheetTitle className="sr-only">logo</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-2">
          {mainMenus.map((menu, idx) => (
            <SheetClose asChild key={idx}>
              <Button
                asChild
                variant={"ghost"}
                className="justify-start text-lg"
              >
                <Link href={menu.url}>
                  <menu.icon /> {menu.label}
                </Link>
              </Button>
            </SheetClose>
          ))}
          {userMenus.map((menu, idx) => (
            <SheetClose asChild key={idx}>
              <Button
                asChild
                variant={"ghost"}
                className="justify-start text-lg"
              >
                <Link href={menu.url}>
                  <menu.icon /> {menu.label}
                </Link>
              </Button>
            </SheetClose>
          ))}
          <Button
            variant={"ghost"}
            className={cn("cursor-pointer justify-start text-lg", {
              hidden: !session,
            })}
            onClick={handleLogout}
          >
            <LogOutIcon /> Logout
          </Button>
        </div>
        <SheetFooter className="border-t pb-8">
          {session && user ? (
            <HeaderMobileUserNavigation
              name={user?.name}
              email={user?.email}
              image={user?.image || "/avatar.jpg"}
            />
          ) : (
            <HeaderAuthButtons />
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMobileNavigation;
