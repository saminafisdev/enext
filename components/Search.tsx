"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  return (
    <form action="/search" method="GET" className="flex  items-stretch h-10 ">
      <Input
        type="search"
        placeholder="Search eNext"
        className="bg-white text-black rounded-r-none h-full text-base"
        name="query"
        defaultValue={query}
      />
      <button
        type="submit"
        className="bg-primary text-primary-foreground rounded-s-none rounded-e-md h-full px-3 py-2 hover:cursor-pointer"
      >
        <SearchIcon className="w-6 h-6" />
      </button>
    </form>
  );
}
