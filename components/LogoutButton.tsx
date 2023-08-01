"use client";
import React from "react";
import { Button } from "@/ui/button";
import { signOut } from "next-auth/react";
import { toast } from "@/ui/use-toast";

type Props = {};

export default function LogoutButton({}: Props) {
  const handleLogOut = async () => {
    try {
      await signOut({
        callbackUrl: "/login",
      });
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Something went wrong while logging out.",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Button variant="link" onClick={handleLogOut}>
      Logout
    </Button>
  );
}
