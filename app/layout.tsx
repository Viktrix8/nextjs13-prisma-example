import type { Metadata } from "next";
import { Inter, Lekton, Poppins } from "next/font/google";
import ThemeProvider from "@/ui/theme-provider";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });
export const lekton = Lekton({ subsets: ["latin"], weight: ["700"] });
export const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Nextjs 13 Prisma Starter | Home",
  description: "A starter for Next.js 13 and Prisma with postgresql.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
