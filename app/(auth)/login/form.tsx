"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import React from "react";

type Props = {};

export default function RegisterForm({}: Props) {
  const signInWithGithub = async () => {
    try {
      await signIn("github", {
        callbackUrl: "/profile",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form action="" className="flex flex-col gap-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          autoCorrect="none"
          autoFocus
        />

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          autoComplete="password"
          autoCorrect="none"
        />

        <Button variant="secondary" type="submit">
          Login
        </Button>
      </form>

      <div className="text-center mt-4 font-medium text-sm">
        Or continue with
      </div>
      <hr />
      <Button className="w-full mt-4" onClick={signInWithGithub}>
        <Github /> Github
      </Button>
    </>
  );
}
