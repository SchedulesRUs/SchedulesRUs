"use client"

import React, { useState, useEffect } from "react";
import { menuItems } from "@/app/constants";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {

  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    // Fetch user data from localStorage on the client side
    const id = localStorage.getItem("id");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    const image = localStorage.getItem("image");

    // Update state with fetched user data
    setId(id);
    setUsername(username);
    setRole(role);
    setImage(image);
  }, []);

  // Return null if data hasn't been loaded yet
  if (!id || !username || !role || !image) return null;

  return (
    <div className="min-w-min">
      
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
            <span className="text-[16px] mt-2">ADMIN ID: {id}</span>
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
