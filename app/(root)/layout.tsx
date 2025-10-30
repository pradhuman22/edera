import Header from "@/components/shared/header";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 grow">{children}</main>
    </div>
  );
};

export default RootLayout;
