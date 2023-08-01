"use client";

import { toast } from "@/ui/use-toast";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

type Props = {};

export default function RegisterForm({}: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signInWithGithub = async () => {
    try {
      await signIn("github", {
        callbackUrl: "/profile",
      });
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong while logging in.",
        description: error.message,
      });
    }
  };

  const signInWithCredentials = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profile",
      });
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong while logging in.",
        description: error.message,
      });
    }
  };

  return (
    <>
      <form onSubmit={signInWithCredentials} className="flex flex-col gap-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          autoCorrect="none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
