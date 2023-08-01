"use client";
import React from "react";
import { Button } from "@/ui/button";
import { signOut } from "next-auth/react";

type Props = {};

export default function LogoutButton({}: Props) {
  const handleLogOut = async () => {
    try {
      await signOut({
        callbackUrl: "/login",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="link" onClick={handleLogOut}>
      Logout
    </Button>
  );
}
