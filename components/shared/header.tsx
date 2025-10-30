import React from "react";
import HeaderLogo from "./header-logo";
import HeaderNavigation from "./header-navigation";
import HeaderUserNavigation from "./header-user-navigation";
import HeaderMobileNavigation from "./header-mobile-navigation";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50">
      <nav className="container mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-24">
        <div className="flex items-center gap-14">
          <HeaderLogo />
          <HeaderNavigation />
        </div>
        <div className="flex items-center gap-3">
          <HeaderUserNavigation />
          <HeaderMobileNavigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;
