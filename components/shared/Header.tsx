import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import SearchInput from "@/components/Search";

const Header = () => {
  return (
    <header className="bg-black text-white py-3 px-4 flex items-center justify-between gap-6">
      <Link href={"/"} className="text-3xl font-bold">
        eNext
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchInput />
      </Suspense>
      <Link href="/cart" className="flex items-end">
        <ShoppingCart size="32" />
        <span className="font-semibold text-sm">Cart</span>
      </Link>
    </header>
  );
};

export default Header;
