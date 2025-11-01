import {
  BedSingleIcon,
  House,
  HousePlugIcon,
  LayoutDashboard,
  MessageCircleMore,
  UserCog,
} from "lucide-react";

export const mainMenus = [
  { label: "Browse Rooms", url: "/rooms", icon: BedSingleIcon },
  { label: "List Room", url: "/dashboard/rooms/create", icon: HousePlugIcon },
  // { label: "How It Works", url: "/how-it-works", icon: FileQuestionMarkIcon },
  // { label: "Contact Us", url: "/contact", icon: MailQuestion },
  // { label: "FAQ", url: "/contact", icon: MailQuestion },
];

export const userMenus = [
  { label: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { label: "Profile Settings", url: "/dashboard/profile", icon: UserCog },
  { label: "Listed Rooms", url: "/dashboard/rooms", icon: House },
  { label: "Messages", url: "/dashboard/message", icon: MessageCircleMore },
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

export const rooms = [
  {
    id: 1,
    image: "/modern-bedroom-natural-light.png",
    title: "Cozy Room in Downtown",
    location: "New York, NY",
    price: 850,
  },
  {
    id: 2,
    image: "/bright-spacious-bedroom-with-desk.jpg",
    title: "Spacious Room Near Campus",
    location: "San Francisco, CA",
    price: 950,
  },
  {
    id: 3,
    image: "/comfortable-bedroom-with-city-view.jpg",
    title: "Modern Room with City View",
    location: "Los Angeles, CA",
    price: 780,
  },
];
