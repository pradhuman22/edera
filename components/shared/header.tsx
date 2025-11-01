"use client";
import React, { useEffect, useState } from "react";
import HeaderLogo from "./header-logo";
import HeaderNavigation from "./header-navigation";
import HeaderUserNavigation from "./header-user-navigation";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { BellIcon } from "lucide-react";
import { Button } from "../ui/button";
import HeaderNotificationBell from "./header-notification-bell";
import { usePathname } from "next/navigation";

const HeaderMobileNavigation = dynamic(
  () => import("./header-mobile-navigation"),
  {
    ssr: false,
  },
);

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log();
  return (
    <header
      className={cn("sticky top-0 z-50 w-full", {
        "bg-background/95 supports-backdrop-filter:bg-background/60 border-b shadow-sm backdrop-blur transition-all":
          !pathname.includes("dashboard") && isScrolled,
        "bg-background border-b shadow-sm": pathname.includes("dashboard"),
      })}
    >
      <nav className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
        <div className="flex items-center gap-14">
          <HeaderLogo />
          <HeaderNavigation />
        </div>
        <div className="flex items-center gap-3">
          <HeaderNotificationBell />
          <HeaderUserNavigation />
          <HeaderMobileNavigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;
