import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

type Props = {};

export default async function ProfilePage({}: Props) {
  const session = await getServerSession();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 container flex justify-center py-24">
      <div className="flex items-center gap-4">
        <Image
          src={
            session?.user?.image ??
            `https://ui-avatars.com/api/?name=${session?.user?.name}`
          }
          alt="profile"
          height="100"
          width="100"
          className="rounded-full"
        />
        <div>
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
        </div>
      </div>
    </div>
  );
}
