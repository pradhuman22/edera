import { MapPinnedIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href={"/"} className="-mt-1.5">
      <h1 className="flex items-center text-3xl leading-none font-[550]">
        <MapPinnedIcon className="mr-1 size-6" />
        <span className=""></span>
        edera
      </h1>
    </Link>
  );
};

export default HeaderLogo;
