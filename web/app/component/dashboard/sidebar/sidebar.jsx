import React from "react";
import { menuItems } from "@/app/constants";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="min-w-max">
      <div className="flex items-center gap-5 mb-8">
        <Image
          src="/user2.jpg"
          alt="user"
          width="100"
          height="100"
          className="rounded-md "
          priority
        />
        <div className="flex flex-col">
          <span className="font-bold">Tony Tony Stark</span>
          <span className="text-[16px]">Administrator Executive</span>
        </div>
      </div>
      <ul>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span>{category.title}</span>
            {category.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <Link href="./">
      <button className="flex items-center p-3 gap-2 rounded-2xl hover:bg-indigo-950 hover:text-white w-[100%]">
        <MdLogout />
        Logout
      </button>
      </Link>
    </div>
  );
};

export default Sidebar;
