"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import SearchInput from "@/components/Search";
import UserButton from "./UserButton";

const Header = () => {
  const [cartLength, setCartLength] = useState<number>(0);

  useEffect(() => {
    const fetchCart = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        return; // Skip the request if the user is not set
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${accessToken}`,
        },
      });
      const { data } = await res.json();
      setCartLength(data?.length || 0); // Set the length of the cart
    };
    fetchCart();
  }, []);

  return (
    <header className="bg-black text-white py-3 px-4 flex items-center justify-between gap-6">
      <Link href={"/"} className="text-3xl font-bold">
        eNext
      </Link>
      <div className="max-w-xl flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchInput />
        </Suspense>
      </div>
      <div className="flex items-center gap-3">
        <UserButton />
        <Link href="/cart" className="flex items-end space-x-2">
          <ShoppingCart className="w-6 h-6" />
          <span className="font-semibold text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full">
            {cartLength}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
