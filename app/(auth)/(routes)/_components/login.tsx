"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Email is Required",
  }).email({message:'Email Is Invalid '}),
  password: z.string().min(1, {
    message: "Password is Required",
  }),
});

export const LoginComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form?.formState?.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        // console.log(values,45)

      if (typeof window !== "undefined") {
        localStorage.setItem("isLoggedIn", String(true));
      }

      router.push("/products");
      form.reset();
    
    } catch (error) {
      console.log(error);
    }
  };

  if (!isMounted) return null;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-6">
        <h2 className="text-xl font-semibold text-center text-zinc-500 dark:text-secondary/70 mb-4">
          Login
        </h2>
        <FormField
          name="email"
          render={({ field }:any) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  placeholder="Enter Email Address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }:any) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  disabled={isLoading}
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  placeholder="Enter Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button variant={"primary"} disabled={isLoading}>
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
};
