import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        type="search"
        placeholder="Search for accounts"
        className="pl-10 border-neutral-500 focus-visible:ring-0"
      /> 
    </div>
  );
};

export default SearchInput;
