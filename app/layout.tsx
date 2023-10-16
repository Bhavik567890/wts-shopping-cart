import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { CartContextProvider } from "@/providers/cart-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next JS 13",
  description: "It's includes BLog,CRUD and Authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={cn(inter.className, "bg-white dark:bg-[#313338]")}>

          <CartContextProvider>

        {children}
          </CartContextProvider>

        </body>
      </html>
    </>
  );
}
