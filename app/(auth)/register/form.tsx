"use client";

import { toast } from "@/ui/use-toast";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

export default function RegisterForm({}: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const signInWithGithub = async () => {
    try {
      await signIn("github", {
        callbackUrl: "/profile",
      });
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Something went wrong while registering.",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const registerWithCredentials = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (data.status === "error") {
        throw new Error(data.body.message);
      }

      router.push("/login");
    } catch (error: any) {
      toast({
        title: "Something went wrong while registering.",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <form onSubmit={registerWithCredentials} className="flex flex-col gap-4">
        <Label htmlFor="name">Name</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
          autoFocus
        />

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          autoCorrect="none"
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
          Register
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
