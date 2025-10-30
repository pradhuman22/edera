"use client";
import HeaderAuthButtons from "./header-auth-buttons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { LogOutIcon } from "lucide-react";
import { userMenus } from "@/constant";

const HeaderUserNavigation = () => {
  const session = false;
  return (
    <div className="flex items-center gap-3 max-lg:hidden">
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer border shadow">
            <Avatar className="h-10 w-10">
              <AvatarImage src={"/avatar.jpg"} alt="user" />
              <AvatarFallback>GU</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72" align="end" sideOffset={10}>
            <DropdownMenuLabel>
              <h3>Shrestha Pradhuman</h3>
              <p>shresthapradhuman2018@gmail.com</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {userMenus.map((menu, idx) => (
                <DropdownMenuItem key={idx} asChild className="cursor-pointer">
                  <Link href={menu.url}>
                    <menu.icon /> <span>{menu.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <LogOutIcon />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <HeaderAuthButtons />
      )}
    </div>
  );
};

export default HeaderUserNavigation;
