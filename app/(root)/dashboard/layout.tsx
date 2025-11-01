import React, { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container mx-auto max-w-7xl p-4 lg:px-8">{children}</div>
  );
};

export default DashboardLayout;
