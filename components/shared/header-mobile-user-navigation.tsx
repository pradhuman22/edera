import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const HeaderMobileUserNavigation = ({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) => {
  return (
    <div className="flex items-center gap-1.5">
      <Avatar className="h-14 w-14 border shadow">
        <AvatarImage src={image || "/avatar.jpg"} alt="user" />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="line-clamp-1">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm text-balance text-ellipsis">
          {email}
        </p>
      </div>
    </div>
  );
};

export default HeaderMobileUserNavigation;
