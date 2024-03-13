"use client"

import React, { useState, useEffect } from "react";
import { menuItems } from "@/app/constants";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import Link from "next/link";
import { s, s1, s2, s3, s4, s5, s6, s7 } from "@/app/asset";

const Sidebar = () => {

  const id = localStorage.getItem("id");
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const image = localStorage.getItem("image");

  return (
    <div className="min-w-max">
      
        <div className="flex items-center gap-5 mb-4">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={image}
              alt="user"
              width="120"
              height="120"
              className="rounded-md "
              priority
            />
            <span className="text-[16px] mt-2 border-b-4 border-indigo-950">ADMIN ID: {id}</span>
          </div>
        <div className="flex flex-col items-center justify-center">
          
          <span className="font-bold text-xl">{username && username.toUpperCase()}</span>
          <span className="text-[18px]">{role}</span>
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
