import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import SearchInput from "@/components/Search";
import UserButton from "./UserButton";

const Header = () => {
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
        <Link href="/cart" className="flex items-end">
          <ShoppingCart className="w-6 h-6" />
          <span className="font-semibold text-sm">Cart</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
