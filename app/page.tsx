import { cn } from "@/lib/utils";
import { poppins } from "./layout";

export default function Home() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 container flex justify-center py-24">
      <div className="flex flex-col gap-4 text-center">
        <h1 className={cn(poppins.className, "font-bold text-4xl")}>
          Nextjs 13 & Prisma Starter Template
        </h1>
        <p className="max-w-prose tracking-wider">
          This is a starter template for Next.js 13 and Prisma with postgresql.
          Using Shadcn/ui for styling.
        </p>
      </div>
    </main>
  );
}
