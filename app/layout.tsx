import type { Metadata } from "next";
import "./globals.css";

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
      <body className={"relative font-sans antialiased w-full"}>
        {children}
      </body>
    </html>
  );
}
