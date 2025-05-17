"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [input, setInput] = React.useState<string>("");

  const handleSubmit = () => {
    const params = new URLSearchParams(searchParams);

    if (input.trim() !== "") {
      params.set("query", input);
    } else {
      params.delete("query");
    }

    replace(`/search/?${params.toString()}`);
  };

  return (
    <div className="flex flex-1 items-center">
      <Input
        type="text"
        placeholder="Search eNext"
        className="bg-white text-black rounded-r-none"
        onChange={(e) => setInput(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        value={input}
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        className="bg-primary rounded-l-none"
      >
        <Search size={36} />
      </Button>
    </div>
  );
}
