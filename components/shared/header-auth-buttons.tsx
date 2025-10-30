import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeaderAuthButtons = () => {
  return (
    <div
      className={
        "flex flex-col space-y-3 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-3"
      }
    >
      <Button
        size={"lg"}
        variant={"outline"}
        className="cursor-pointer text-lg font-normal"
        asChild
      >
        <Link href={"/login"}>Login</Link>
      </Button>
      <Button
        size={"lg"}
        variant={"default"}
        className="cursor-pointer text-lg font-normal"
        asChild
      >
        <Link href={"/register"}>Register</Link>
      </Button>
    </div>
  );
};

export default HeaderAuthButtons;
