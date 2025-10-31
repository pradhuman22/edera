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
import { ChevronDown, LogOutIcon } from "lucide-react";
import { userMenus } from "@/constant";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";

const HeaderUserNavigation = () => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();
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
          router.refresh();
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      },
    });
  };
  return (
    <div className="flex items-center justify-center gap-3 max-lg:hidden">
      {isPending ? (
        <div className="flex h-10 w-10 items-center justify-center">
          <Spinner className="size-5" />
        </div>
      ) : session ? (
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="focus-visible:border-secondary cursor-pointer focus-visible:ring-0"
          >
            <Button variant={"outline"} className="px-2" size={"lg"}>
              <Avatar className="h-6 w-6 border shadow">
                <AvatarImage src={user?.image || "/avatar.jpg"} alt="user" />
                <AvatarFallback>GU</AvatarFallback>
              </Avatar>
              <p className="text-sm">{user?.name}</p>
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72" align="end" sideOffset={10}>
            <DropdownMenuLabel>
              <h3>{user?.name}</h3>
              <p>{user?.email}</p>
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
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
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
