import {
  AvatarFallback,
  Avatar,
  AvatarImage,
} from "../../components/ui/avatar";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import avatarPlaceholder from '@/assets/images/avatar.png'
const AvatarComponent = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={avatarPlaceholder.src} />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex w-fit bg-neutral-800 border-none shadow-lg shadow-black/50 text-white gap-2 p-6 -translate-[10px]">
        <Avatar className="h-[100px] w-[100px]">
          <AvatarImage src={avatarPlaceholder.src} />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
        <p>User Name</p>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarComponent;
