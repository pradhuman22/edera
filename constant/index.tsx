import {
  BedSingleIcon,
  BellDot,
  FileQuestionMarkIcon,
  HouseIcon,
  HousePlugIcon,
  LayoutDashboard,
  ReceiptJapaneseYenIcon,
  RssIcon,
  UserCog,
} from "lucide-react";

export const mainMenus = [
  { label: "Browse Rooms", url: "/rooms", icon: BedSingleIcon },
  { label: "List Room", url: "/dashboard/rooms/create", icon: HousePlugIcon },
  { label: "How It Works", url: "/how-it-works", icon: FileQuestionMarkIcon },
  { label: "Blogs & News", url: "/blog", icon: RssIcon },
];

export const userMenus = [
  { label: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { label: "Profile Settings", url: "/dashboard/profile", icon: UserCog },
];

export const locations = [
  { label: "Tokyo", value: "tokyo" },
  { label: "Kyoto", value: "kyoto" },
  { label: "Osaka", value: "osaka" },
  { label: "Fukuoka", value: "fukuoka" },
  { label: "Sapporo", value: "sapporo" },
  { label: "Nagoya", value: "nagoya" },
  { label: "Chiba", value: "chiba" },
  { label: "Saitama", value: "saitama" },
];
