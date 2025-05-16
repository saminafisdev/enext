import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-black text-white py-3 px-4 flex items-center justify-between gap-6">
      <Link href={"/"} className="text-3xl font-bold">
        eNext
      </Link>
      <div className="flex flex-1 items-center">
        <Input
          type="text"
          placeholder="Search eNext"
          className="bg-white text-black rounded-r-none"
        />
        <Button type="submit" className="bg-green-600 rounded-l-none">
          <Search size={36} />
        </Button>
      </div>
      <Link href="/cart" className="flex items-end">
        <ShoppingCart size="32" />
        <span className="font-semibold text-sm">Cart</span>
      </Link>
    </header>
  );
};

export default Header;
