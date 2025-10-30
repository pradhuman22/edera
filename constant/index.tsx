import {
  BedSingleIcon,
  FileQuestionMarkIcon,
  HousePlugIcon,
  LayoutDashboard,
  RssIcon,
  UserCog,
} from "lucide-react";

export const mainMenus = [
  { label: "Browse Rooms", url: "/rooms", icon: BedSingleIcon },
  { label: "List Room", url: "/dashboard/rooms/create", icon: HousePlugIcon },
  { label: "How It Works", url: "/how-it-works", icon: FileQuestionMarkIcon },
  { label: "Blogs", url: "/blog", icon: RssIcon },
];

export const userMenus = [
  { label: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { label: "Profile Settings", url: "/dashboard/profile", icon: UserCog },
];
