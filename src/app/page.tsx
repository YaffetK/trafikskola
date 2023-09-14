"use client";
import LoginForm from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-screen justify-center bg-gray-100">
      <div className="">
        <LoginForm />
      </div>
    </div>
  );
}
