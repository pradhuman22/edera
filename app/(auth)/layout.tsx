import HeaderLogo from "@/components/shared/header-logo";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <nav className="container mx-auto px-4 py-5 lg:px-8">
          <HeaderLogo />
        </nav>
      </header>
      <main className="flex items-center justify-center py-20">{children}</main>
    </div>
  );
};

export default AuthLayout;
