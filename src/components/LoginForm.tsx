import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { FormEventHandler, useState } from "react";
import { Label } from "./ui/label";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 2 characters" })
    .max(50, { message: "Username must have maximum 50 characters" }),
  password: z.string().min(6).max(20),
});

const LoginForm = () => {
  // här vi set user till ett objekt av typen FormData

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  type FormData = z.infer<typeof formSchema>;

  const handleInput: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const a: FormData = form.getValues();
    if (a.username.length >= 8 && a.password.length >= 6) {
      return { ...a };
    } else if (a.password.length < 6) {
      form.setError("password", {
        type: "manual",
        message: `${a.password} is incorrect try again`,
      });
    } else {
      form.setError("username", {
        type: "manual",
        message: `${a.username} is not correct`,
      });
    }
  };

  return (
    <div className="flex items-center justify-center max-w-lg p-10 mx-auto min-w-max space-y-8 text-black w-full bg-gray-200 border border-black">
      <Form {...form}>
        <form onSubmit={handleInput}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormControl>
                  <Input
                    id="username"
                    placeholder="enter username"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    className=" border-none"
                    placeholder="enter password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="w-full my-4">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
