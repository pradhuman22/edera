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
import { Loader2, LogOutIcon } from "lucide-react";
import { userMenus } from "@/constant";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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
    <div className="flex items-center gap-3 max-lg:hidden">
      {isPending ? (
        <div className="flex h-10 w-10 items-center justify-center border bg-gray-200 text-center shadow">
          U
        </div>
      ) : session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer border shadow">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user?.image || "/avatar.jpg"} alt="user" />
              <AvatarFallback>GU</AvatarFallback>
            </Avatar>
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
