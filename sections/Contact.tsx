"use client";

import { formSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div id="contact" className="w-full min-h-screen">
      <h1 className="font-kalam text-[16px] text-primary text-center">
        Contact
      </h1>

      <div className="dark:bg-secondary/95   rounded-md flex flex-col md:flex-row items-center justify-between p-3">
        <div className="w-[592px]">
          <span className="text-[16px] font-normal leading-4 text-primary font-kalam">
            Contact me
          </span>
          <h3 className="text-[24px] lg:text-[32px] font-bold">
            Enjoyed my work? Let’s work together
          </h3>

          <p className="text-[16px] lg:text-[18px] mt-4 dark:text-gray-300 leading-6">
            I’m always up for a chat. Pop me an email at{" "}
            <Link
              className="underline text-primary"
              target="_blank"
              href="mailto:bruno.jesus.carmo@gmail.com"
            >
              bruno.jesus.carmo@gmail.com
            </Link>{" "}
            or give me a shout on social media.
          </p>

          <div className=" flex mt-4 gap-4">
            <Link
              href="https://github.com/BrunoJSC"
              target="_blank"
              className="dark:bg-primary dark:text-white  p-2 rounded-md hover:bg-primary/75"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bruno-jsc/"
              target="_blank"
              className="dark:bg-primary dark:text-white   p-2 rounded-md hover:bg-primary/75"
            >
              <Linkedin />
            </Link>

            <Link
              href="https://www.instagram.com/brunocarmo/"
              target="_blank"
              className="dark:bg-primary dark:text-white  p-2 rounded-md hover:bg-primary/75"
            >
              <Instagram />
            </Link>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-[488px]"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>Please enter your email</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input placeholder="Message" {...field} />
                  </FormControl>
                  <FormDescription>Please enter your message</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full text-white">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
