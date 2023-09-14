import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavbarProps } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Master Trafikskola",
  description: "Min fantastiska trafikskola",
};

const list: NavbarProps[] = [
  {
    id: 1,
    path: "HOME",
  },
  {
    id: 2,
    path: "ABOUT",
  },
  {
    id: 3,
    path: "ACCOUNT",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar Lista={list} />

        {children}
      </body>
    </html>
  );
}
