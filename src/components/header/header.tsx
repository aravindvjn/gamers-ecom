import React from "react";

import AvatarComponent from "../common/avatar";
import SearchInput from "../inputs/search-input";

const Header = () => {
  return (
    <div className="fixed bg-neutral-900 text-white top-0 left-0 right-0 h-[45px] flex justify-between items-center px-4 shadow-md shadow-black/40">
      <div>
        <ul className="flex items-center gap-4">
            <li>Home</li>
            <li>Games</li>
        </ul>
      </div>
      <div className="center-row gap-4">
        <SearchInput />
        <AvatarComponent />
      </div>
    </div>
  );
};

export default Header;
