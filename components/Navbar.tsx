import Link from "next/link";
import React from "react";
import { lekton } from "@/app/layout";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { ThemeToggler } from "./ThemeToggler";
import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";

type Props = {};

export default async function Navbar({}: Props) {
  const session = await getServerSession();

  return (
    <nav className="container p-4 flex justify-between items-center">
      <Link href="/">
        <Button variant="link" className={cn(lekton.className, "text-4xl")}>
          Starter
        </Button>
      </Link>
      <ul className="flex items-center gap-2">
        <li>
          <Link href="/profile">
            <Button variant="link">Profile</Button>
          </Link>
        </li>
        {!session ? (
          <>
            <li>
              <Link href="/login">
                <Button variant="link">Login</Button>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <Button variant="link">Register</Button>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <LogoutButton />
          </li>
        )}
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </nav>
  );
}
