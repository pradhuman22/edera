import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const HeaderMobileUserNavigation = () => {
  return (
    <div className="flex items-center gap-1.5">
      <Avatar className="h-14 w-14 border shadow">
        <AvatarImage src={"/avatar.jpg"} alt="user" />
        <AvatarFallback>GU</AvatarFallback>
      </Avatar>
      <div className="line-clamp-1">
        <h3 className="text-lg font-medium">Shrestha Pradhuman</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm text-balance text-ellipsis">
          shresthapradhuman2018@gmail.com
        </p>
      </div>
    </div>
  );
};

export default HeaderMobileUserNavigation;
