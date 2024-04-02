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
    <div className="flex justify-start items-center bg-[#f1efefe9] p-8 rounded-md">
      <div className="capitalize font-bold text-2xl">{pathname.split("/").pop().toUpperCase()}</div>

      {/* <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 bg-[#f1efefe9] p-2 rounded-md">
            <MdSearch size={24} />
            <input type="text" placeholder="Search..." className="p-1 font-mono rounded-md"></input>
          </div>
        <div className="flex flex-row gap-4">
          <MdOutlineChat size={24} />
          <MdNotifications size={24} />
          <MdPublic size={24} />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
