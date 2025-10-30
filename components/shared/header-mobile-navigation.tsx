"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import HeaderAuthButtons from "./header-auth-buttons";
import HeaderMobileUserNavigation from "./header-mobile-user-navigation";
import Link from "next/link";
import { mainMenus, userMenus } from "@/constant";
import { cn } from "@/lib/utils";

const HeaderMobileNavigation = () => {
  const session = false;
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer lg:hidden">
        <Button type="button" variant={"outline"} size={"icon-lg"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-2/3">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col space-y-1.5 px-2">
          {mainMenus.map((menu, idx) => (
            <Button
              key={idx}
              asChild
              variant={"ghost"}
              className="justify-start text-lg"
            >
              <Link href={menu.url}>
                <menu.icon /> {menu.label}
              </Link>
            </Button>
          ))}
          {userMenus.map((menu, idx) => (
            <Button
              key={idx}
              asChild
              variant={"ghost"}
              className={cn("justify-start text-lg", {
                hidden: !session,
              })}
            >
              <Link href={menu.url}>
                <menu.icon /> {menu.label}
              </Link>
            </Button>
          ))}
        </div>
        <SheetFooter className="border-t">
          {session ? <HeaderMobileUserNavigation /> : <HeaderAuthButtons />}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMobileNavigation;
