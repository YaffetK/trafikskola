"use client";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import { NavbarProps } from "@/components/Navbar";

export default function Home() {
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
  return (
    <div className=" flex flex-col items-center min-h-screen w-screen bg-gray-100">
      <Navbar Lista={list} />
      <LoginForm />
    </div>
  );
}
