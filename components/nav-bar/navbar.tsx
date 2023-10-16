// Navbar.js
"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import Logo from "../logo/logo";
import { ShoppingCart } from 'lucide-react';
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const router = useRouter();

  const {cart} = useCart();

  const handleLogOut = () => {
    router.push("/");
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  };

  return (
    <div className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="mr-4">Welcome</div>
        <div className="flex items-center">
          <Link href={'/cart'}>
            <div className="relative">
              <ShoppingCart className="h-6 w-6 mr-4" />
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  {cart?.length}
                </span>
              )}
            </div>
          </Link>
          <Button variant={"destructive"} onClick={handleLogOut}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
