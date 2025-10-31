import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "edera - Online Room Rental Platform",
    template: "%s - edera",
  },
  description: "Find your next room and roommates here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"relative w-full font-sans antialiased"}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
