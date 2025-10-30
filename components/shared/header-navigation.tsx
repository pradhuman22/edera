"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { mainMenus } from "@/constant";

const HeaderNavigation = () => {
  return (
    <NavigationMenu className="max-lg:hidden">
      <NavigationMenuList className="gap-6">
        {mainMenus.map((menu, idx) => (
          <NavigationMenuItem key={idx}>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:text-primary bg-transparent px-0 text-lg font-normal hover:bg-transparent focus:bg-transparent",
              )}
            >
              <Link href={menu.url}>{menu.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavigation;
