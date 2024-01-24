import React from "react";
import { menuItems } from "@/app/constants";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <div className="flex items-center gap-5 mb-5">
        <Image src="/ape4.png" alt="ape4" width="100" height="100"/>
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
              <MenuLink item={item} key={item.title}/>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
