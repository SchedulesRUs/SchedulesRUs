"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {

  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center bg-[#f1efefe9] p-4 rounded-md">
      <div className="capitalize font-bold">
        {pathname.split("/").pop()}
      </div>

      <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 bg-[#f1efefe9] p-2 rounded-md">
            <MdSearch />
            <input type="text" placeholder="Search..." className="p-1 font-mono rounded-md"></input>
          </div>
          <div className="flex flex-row gap-2">
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
      </div>

    </div>

  )
};

export default Navbar;
